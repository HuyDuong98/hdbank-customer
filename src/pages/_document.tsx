import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import Script from "next/script";
import { ServerStyleSheets } from "@material-ui/styles";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    };
  }

  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <noscript>
            You need to enable JavaScript to run this app lala.
          </noscript>

          <div
            id="zaloChat"
            style={{ display: "none" }}
            className="zalo-chat-widget"
            data-oaid="1148028551726591727"
            data-welcome-message="Rất vui khi được hỗ trợ bạn!"
            data-autopopup="0"
            data-width=""
            data-height=""
            data-bottom="300"
          ></div>

          {/* <!-- Messenger Chat Plugin Code --> */}
          <div id="fb-root" style={{ display: "none" }}></div>

          {/* <!-- Your Chat Plugin code --> */}
          <div id="fb-customer-chat" className="fb-customerchat"></div>
          <Main />
          <NextScript />
          <script src="https://sp.zalo.me/plugins/sdk.js" />
        </body>
      </Html>
    );
  }
}
