import * as React from "react";
import type { GatsbySSR } from "gatsby";
import "./src/styles/global.css";
import Layout from "./src/components/Layout";

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => {
	return <Layout>{element}</Layout>;
};

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
	setHeadComponents,
}) => {
	setHeadComponents([
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4331921421390242"
      crossOrigin="anonymous"
      key="adsense-script"
    />,
		<meta
			name="google-site-verification"
			content="z-xkRAuhJrHx8NbSs_T3x5OgrXceAA6GYBu7SfR7J64"
			key="google-site-verification"
		/>,
	]);
};
