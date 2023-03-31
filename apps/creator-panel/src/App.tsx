import { GitHubBanner, Refine } from "@refinedev/core";
import {
    Layout,
    ErrorComponent,
    LightTheme,
    notificationProvider,
    RefineSnackbarProvider,
} from "@refinedev/mui";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import dataProvider, { GraphQLClient } from "@refinedev/hasura";
import routerProvider, {
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";
import { CategoryList, CategoryCreate, CategoryEdit } from "pages/categories";

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
    return (
        <BrowserRouter>
            <GitHubBanner />
            <ThemeProvider theme={LightTheme}>
            <CssBaseline />
                <GlobalStyles
                    styles={{ html: { WebkitFontSmoothing: "auto" } }}
                />
                <RefineSnackbarProvider>
                <Refine
                routerProvider={routerProvider}
                dataProvider={gqlDataProvider}
                // ## Refine supports GraphQL subscriptions as out-of-the-box. For more detailed information, please visit here, https://refine.dev/docs/core/providers/live-provider/
                //liveProvider={liveProvider(gqlWebSocketClient)}
                //options={{ liveMode: "auto" }}
                resources={[
                    {
                        name: "posts",
                        list: "/posts",
                        create: "/posts/create",
                        edit: "/posts/edit/:id",
                        show: "/posts/show/:id",
                    },
                    {
                        name: "categories",
                        list: "/categories",
                        create: "/categories/create",
                        edit: "/categories/edit/:id",
                    },
                ]}
                notificationProvider={notificationProvider}
                options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                }}
            >
                <Routes>
                    <Route
                        element={
                            <Layout>
                                <Outlet />
                            </Layout>
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
                            <Route path="show/:id" element={<PostShow />} />
                        </Route>

                        <Route path="/categories">
                            <Route index element={<CategoryList />} />
                            <Route path="create" element={<CategoryCreate />} />
                            <Route path="edit/:id" element={<CategoryEdit />} />
                        </Route>

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
