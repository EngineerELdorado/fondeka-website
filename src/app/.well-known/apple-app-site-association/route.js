const APPLE_APP_SITE_ASSOCIATION = {
  applinks: {
    apps: [],
    details: [
      {
        appID: "2KCBNTYASC.com.fondeka.app",
        paths: [
          "/transaction/*",
          "/group-savings/*",
          "/savings/likelemba-join*",
        ],
      },
      {
        appID: "2KCBNTYASC.com.fondeka.app.dev",
        paths: [
          "/transaction/*",
          "/group-savings/*",
          "/savings/likelemba-join*",
        ],
      },
      {
        appID: "2KCBNTYASC.com.fondeka.app.preview",
        paths: [
          "/transaction/*",
          "/group-savings/*",
          "/savings/likelemba-join*",
        ],
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
