const APPLE_APP_SITE_ASSOCIATION = {
  applinks: {
    apps: [],
    details: [
      {
        appID: "2KCBNTYASC.com.fondeka.app",
        paths: ["*"],
      },
      {
        appID: "2KCBNTYASC.com.fondeka.app.dev",
        paths: ["*"],
      },
      {
        appID: "2KCBNTYASC.com.fondeka.app.preview",
        paths: ["*"],
      },
    ],
  },
};

export function GET() {
  return new Response(JSON.stringify(APPLE_APP_SITE_ASSOCIATION), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
