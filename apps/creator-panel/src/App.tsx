import {
    AuthPage,
    AuthBindings,
    GitHubBanner,
    Refine,
    Authenticated
} from "@refinedev/core";
import {
    Layout,
    ErrorComponent,
    LightTheme,
    notificationProvider,
    RefineSnackbarProvider,
} from "@refinedev/mui";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
// import dataProvider from "@refinedev/simple-rest";
import dataProvider, { GraphQLClient } from "@refinedev/hasura";
import routerProvider, {
    NavigateToResource,
    CatchAllNavigate,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { PostList, PostCreate, PostEdit } from "./pages/posts";
import { ExamplePage } from "./pages/example";
// import Layout from "./pages/layout";

const API_URL = "https://flowing-mammal-24.hasura.app/v1/graphql";

/*
## Refine supports GraphQL subscriptions out-of-the-box. For more detailed information, please visit here: https://refine.dev/docs/core/providers/live-provider/

const WS_URL = "ws://flowing-mammal-24.hasura.app/v1/graphql";

const gqlWebSocketClient = graphqlWS.createClient({
    url: WS_URL,
});
 */

const client = new GraphQLClient(API_URL, {
    headers: {
        "x-hasura-role": "public",
    },
});
const gqlDataProvider = dataProvider(client);

const App: React.FC = () => {
    const authProvider: AuthBindings = {
        login: async ({ providerName, email }) => {
            if (providerName === "google") {
                window.location.href =
                    "https://accounts.google.com/o/oauth2/v2/auth";
                return {
                    success: true,
                };
            }

            if (providerName === "github") {
                window.location.href =
                    "https://github.com/login/oauth/authorize";
                return {
                    success: true,
                };
            }

            if (email) {
                localStorage.setItem("email", email);
                return {
                    success: true,
                    redirectTo: "/",
                };
            }

            return {
                success: false,
                error: new Error("Email is wrong"),
            };
        },
        register: async ({ email, password }) => {
            if (email && password) {
                return {
                    success: true,
                    redirectTo: "/",
                };
            }
            return {
                success: false,
                error: new Error("Email or password is wrong"),
            };
        },
        updatePassword: async ({ password }) => {
            if (password) {
                //we can update password here
                return {
                    success: true,
                    redirectTo: "/login",
                };
            }
            return {
                success: false,
                error: new Error("password is wrong"),
            };
        },
        forgotPassword: async ({ email }) => {
            if (email) {
                //we can send email with forgot password link here
                return {
                    success: true,
                    redirectTo: "/login",
                };
            }
            return {
                success: false,
                error: new Error("Email is wrong"),
            };
        },
        logout: async () => {
            localStorage.removeItem("email");
            return {
                success: true,
                redirectTo: "/",
            };
        },
        onError: async (error) => {
            console.error(error);
            return { error };
        },
        check: async () => {
            return localStorage.getItem("email")
                ? { authenticated: true }
                : {
                      authenticated: false,
                      redirectTo: "/login",
                      error: new Error("Not authenticated"),
                  };
        },
        getPermissions: async () => ["admin"],
        getIdentity: async () => ({
            id: 1,
            name: "Jane Doe",
            avatar: "https://unsplash.com/photos/IWLOvomUmWU/download?force=true&w=640",
        }),
    };

    return (
        <BrowserRouter>
                <ThemeProvider theme={LightTheme}>
                <CssBaseline />
                <GlobalStyles
                    styles={{ html: { WebkitFontSmoothing: "auto" } }}
                />
                <RefineSnackbarProvider>

                
            <Refine
                routerProvider={routerProvider}
                dataProvider={gqlDataProvider}
                notificationProvider={notificationProvider}
                authProvider={authProvider}
                resources={[
                    {
                        name: "posts",
                        list: "/posts",
                        edit: "/posts/edit/:id",
                        create: "/posts/create",
                        meta: {
                            canDelete: true,
                        },
                    },
                ]}
                options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                }}
            >
                <Routes>
                    <Route
                        element={
                            <Authenticated
                                fallback={<CatchAllNavigate to="/login" />}
                            >
                                <Layout>
                                    <Outlet />
                                </Layout>
                            </Authenticated>
                        }
                    >
                        <Route
                            index
                            element={<NavigateToResource resource="posts" />}
                        />

                        <Route path="/posts">
                            <Route index element={<PostList />} />
                            <Route path="create" element={<PostCreate />} />
                            <Route path="edit/:id" element={<PostEdit />} />
                        </Route>
                    </Route>

                    <Route
                        element={
                            <Authenticated fallback={<Outlet />}>
                                <NavigateToResource resource="posts" />
                            </Authenticated>
                        }
                    >
                        <Route
                            path="/login"
                            element={<AuthPage type="login" />}
                        />
                        <Route
                            path="/register"
                            element={<AuthPage type="register" />}
                        />
                        <Route
                            path="/forgot-password"
                            element={<AuthPage type="forgotPassword" />}
                        />
                        <Route
                            path="/update-password"
                            element={<AuthPage type="updatePassword" />}
                        />
                        <Route path="/example" element={<ExamplePage />} />
                    </Route>

                    <Route
                        element={
                            <Authenticated>
                                <Layout>
                                    <Outlet />
                                </Layout>
                            </Authenticated>
                        }
                    >
                        <Route path="*" element={<ErrorComponent />} />
                    </Route>
                </Routes>
                <UnsavedChangesNotifier />
            </Refine>
            </RefineSnackbarProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
