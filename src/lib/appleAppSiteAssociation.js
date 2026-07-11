export const appleAppSiteAssociation = {
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

export function appleAppSiteAssociationResponse() {
  return new Response(JSON.stringify(appleAppSiteAssociation), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
