import React from "react";
import { Grid, Typography, Box, IconButton, Button, Hidden, TextField, Theme } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import transitions from "@mui/material/styles/createTransitions";
import { styled, alpha, useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import useWidth from "hooks/useWidth";

const infos = [
    {
        icon: <PhoneIcon />,
        description: "+1 555 123456",
    },
    {
        icon: <MailIcon />,
        description: "support@company.com",
    },
];

const socialIcons = [
    {
        icon: <GitHubIcon />,
        label: "Github",
        href: "https://github.com/dunky11/react-saas-template",
    },
    {
        icon: <FacebookIcon />,
        label: "Facebook",
        href: "https://facebook.com",
    },
    {
        icon: <LinkedInIcon />,
        label: "LinkedIn",
        href: "https://www.linkedin.com/",
    },
    {
        icon: <TwitterIcon />,
        label: "Twitter",
        href: "https://www.twitter.com/",
    },
];

const FooterOuter = styled("footer")(({ theme }) => ({
    paddingTop: theme.spacing(8),
    [theme.breakpoints.up("sm")]: {
        paddingTop: theme.spacing(10),
    },
    [theme.breakpoints.up("md")]: {
        paddingTop: theme.spacing(10),
    },
}));

const FooterInner = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.common.black,
    // paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
        // paddingTop: theme.spacing(10),
        paddingLeft: theme.spacing(16),
        paddingRight: theme.spacing(16),
        paddingBottom: theme.spacing(10),
    },
    [theme.breakpoints.up("md")]: {
        // paddingTop: theme.spacing(10),
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
        paddingBottom: theme.spacing(10),
    },
}));

const BrandText = styled(Typography)(({ theme }) => ({
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
    // color: theme.palette.common.white,
}));

const FooterLinks = styled("a")(({ theme }) => ({
    marginTop: theme.spacing(2.5),
    marginBot: theme.spacing(1.5),
    color: theme.palette.common.white,
}));

const InfoIcon = styled(IconButton)(({ theme }) => ({
    color: `${theme.palette.common.white} !important`,
    backgroundColor: "#33383b !important",
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
    backgroundColor: "#33383b",
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
        backgroundColor: theme.palette.primary.light,
    },
}));

const CustomLink = styled("a")(({ theme }) => ({
    cursor: "Pointer",
    color: theme.palette.common.white,
    transition: transitions.create(["color"], {
        duration: theme.transitions.duration.shortest,
        easing: theme.transitions.easing.easeIn,
    }),
    "&:hover": {
        color: theme.palette.primary.light,
    },
}));

const WhiteBg = styled(TextField)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
}));

function Footer() {
    const theme = useTheme();
    const isWidthUp = useWidth();
    return (
        <FooterOuter>
            <FooterInner>
                <Grid container spacing={isWidthUp === "md" ? 10 : 5}>
                    <Grid item xs={12} md={6} lg={4}>
                        <form>
                            <Box display="flex" flexDirection="column">
                                <Box mb={1}>
                                    <WhiteBg
                                        variant="filled"
                                        multiline
                                        placeholder="Get in touch with us"
                                        inputProps={{ "aria-label": "Get in Touch" }}
                                        rows={4}
                                        fullWidth
                                        required
                                    />
                                </Box>
                                <Box mb={1}>
                                    <WhiteBg
                                        variant="filled"
                                        placeholder="Your email"
                                        inputProps={{ "aria-label": "Email" }}
                                        fullWidth
                                        required
                                    />
                                </Box>
                                <Button variant="outlined" type="submit">
                                    Send Message
                                </Button>
                            </Box>
                        </form>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={12} md={6} lg={4}>
                            <Box display="flex" justifyContent="center">
                                <div>
                                    {infos.map((info, index) => (
                                        <Box display="flex" mb={1} key={index}>
                                            <Box mr={2}>
                                                <InfoIcon tabIndex={-1} disabled>
                                                    {info.icon}
                                                </InfoIcon>
                                            </Box>
                                            <Box
                                                display="flex"
                                                flexDirection="column"
                                                justifyContent="center"
                                            >
                                                <Typography variant="h6" className="text-white">
                                                    {info.description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </div>
                            </Box>
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} md={6} lg={4}>
                        <Typography variant="h6" paragraph style={{ color: "#f5f5f5" }}>
                            About the Company
                        </Typography>
                        <BrandText style={{ color: "#8f9296" }} paragraph>
                            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod
                            convallis velit, eu auctor lacus vehicula sit amet.
                        </BrandText>
                        <Box display="flex">
                            {socialIcons.map((socialIcon, index) => (
                                <Box key={index} mr={index !== socialIcons.length - 1 ? 1 : 0}>
                                    <FooterLinks href={socialIcon.href}>
                                        <SocialIcon aria-label={socialIcon.label}>
                                            {socialIcon.icon}
                                        </SocialIcon>
                                    </FooterLinks>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </FooterInner>
        </FooterOuter>
    );
}

export default Footer;
