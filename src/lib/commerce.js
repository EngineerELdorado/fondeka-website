export const commercePages = {
  'boutique-en-ligne': {
    kicker: { en: 'Online store', fr: 'Boutique en ligne' },
    title: { en: 'Create an online store without coding', fr: 'Créez une boutique en ligne sans coder' },
    intro: {
      en: 'Add your products, share one store link, receive orders and let customers use supported local payment methods.',
      fr: 'Ajoutez vos produits, partagez un lien de boutique, recevez des commandes et proposez les moyens de paiement locaux pris en charge.',
    },
    steps: {
      en: ['Create your store', 'Add products and prices', 'Share your store link', 'Receive orders and payments'],
      fr: ['Créez votre boutique', 'Ajoutez vos produits et prix', 'Partagez le lien', 'Recevez commandes et paiements'],
    },
    details: {
      en: ['A simple storefront customers can browse from their phone', 'A shareable link for WhatsApp and social media', 'Orders, customers and sales in one place'],
      fr: ['Une vitrine simple à consulter sur téléphone', 'Un lien à partager sur WhatsApp et les réseaux sociaux', 'Commandes, clients et ventes au même endroit'],
    },
    next: ['logiciel-de-caisse', 'paiement-mobile-money'],
  },
  'logiciel-de-caisse': {
    kicker: { en: 'Point of sale', fr: 'Logiciel de caisse' },
    title: { en: 'Run your shop with a POS on your phone', fr: 'Gérez votre commerce avec un POS sur votre téléphone' },
    intro: {
      en: 'Record sales, follow daily activity, check stock and find customer information from a mobile-first point-of-sale tool.',
      fr: 'Enregistrez les ventes, suivez l’activité, vérifiez le stock et retrouvez vos clients depuis un outil de caisse mobile.',
    },
    steps: {
      en: ['Select a product', 'Record the sale', 'Check the day’s sales', 'Review stock and customers'],
      fr: ['Sélectionnez un produit', 'Enregistrez la vente', 'Consultez les ventes du jour', 'Vérifiez stocks et clients'],
    },
    details: {
      en: ['A clear view of sales activity', 'Product and inventory tracking', 'Customer records for better follow-up'],
      fr: ['Une vue claire de l’activité commerciale', 'Le suivi des produits et du stock', 'Un fichier client pour faciliter le suivi'],
    },
    next: ['gestion-des-stocks', 'boutique-en-ligne'],
  },
  'paiement-mobile-money': {
    kicker: { en: 'Local payments', fr: 'Paiement local' },
    title: { en: 'Accept Mobile Money in your online store', fr: 'Acceptez Mobile Money dans votre boutique en ligne' },
    intro: {
      en: 'Give customers familiar ways to pay. Available networks, currencies and settlement options depend on the country and current product coverage.',
      fr: 'Proposez à vos clients des moyens de paiement familiers. Les réseaux, devises et options de retrait dépendent du pays et de la couverture actuelle.',
    },
    steps: {
      en: ['Customer places an order', 'Chooses an available payment method', 'Confirms the payment', 'Merchant follows the transaction'],
      fr: ['Le client passe commande', 'Il choisit un moyen disponible', 'Il confirme le paiement', 'Le commerçant suit la transaction'],
    },
    details: {
      en: ['Payment options adapted to supported African markets', 'A connected order and payment journey', 'Coverage shown before merchants start'],
      fr: ['Des paiements adaptés aux marchés africains pris en charge', 'Un parcours commande-paiement connecté', 'Une couverture précisée avant de commencer'],
    },
    next: ['pays', 'tarifs'],
  },
  'gestion-des-stocks': {
    kicker: { en: 'Inventory', fr: 'Gestion des stocks' },
    title: { en: 'Keep track of your shop inventory', fr: 'Suivez le stock de votre boutique simplement' },
    intro: {
      en: 'See what is available, connect sales to inventory and know which products need your attention.',
      fr: 'Voyez ce qui est disponible, reliez les ventes au stock et identifiez les produits qui demandent votre attention.',
    },
    steps: {
      en: ['Add products', 'Set available quantities', 'Record sales', 'Review remaining stock'],
      fr: ['Ajoutez vos produits', 'Indiquez les quantités', 'Enregistrez les ventes', 'Consultez le stock restant'],
    },
    details: {
      en: ['Product-level quantities', 'Sales and stock in one workflow', 'A practical view for small shops'],
      fr: ['Les quantités par produit', 'Ventes et stocks dans un seul parcours', 'Une vue pratique pour les petits commerces'],
    },
    next: ['logiciel-de-caisse', 'boutique-en-ligne'],
  },
  tarifs: {
    kicker: { en: 'Pricing', fr: 'Tarifs' },
    title: { en: 'Understand Commerce costs before you start', fr: 'Comprenez les coûts Commerce avant de commencer' },
    intro: {
      en: 'Fondeka shows the applicable store, service and transaction fees in the app before a merchant confirms an operation.',
      fr: 'Fondeka affiche dans l’application les frais de boutique, de service et de transaction applicables avant la confirmation d’une opération.',
    },
    steps: {
      en: ['Choose the Commerce feature', 'Review the displayed price', 'Check transaction fees', 'Confirm only when ready'],
      fr: ['Choisissez la fonction Commerce', 'Consultez le prix affiché', 'Vérifiez les frais de transaction', 'Confirmez lorsque vous êtes prêt'],
    },
    details: {
      en: ['No invented price claims on this page', 'Current fees remain visible in the product', 'Country and payment method can affect charges'],
      fr: ['Aucun tarif approximatif sur cette page', 'Les frais à jour restent visibles dans le produit', 'Le pays et le moyen de paiement peuvent modifier les frais'],
    },
    next: ['pays', 'boutique-en-ligne'],
  },
  pays: {
    kicker: { en: 'Availability', fr: 'Disponibilité' },
    title: { en: 'Where Fondeka Commerce is available', fr: 'Où Fondeka Commerce est disponible' },
    intro: {
      en: 'Fondeka is built in DR Congo for Africa. Store creation, customer payments and withdrawals may have different coverage, which is shown in the app.',
      fr: 'Fondeka est construite en RDC pour l’Afrique. La création de boutique, les paiements clients et les retraits peuvent avoir des couvertures différentes, affichées dans l’application.',
    },
    steps: {
      en: ['Select your country', 'Check store availability', 'Review payment networks and currencies', 'Confirm withdrawal options'],
      fr: ['Sélectionnez votre pays', 'Vérifiez la création de boutique', 'Consultez réseaux et devises', 'Confirmez les options de retrait'],
    },
    details: {
      en: ['DR Congo and Republic of the Congo are treated separately', 'Coverage depends on active networks and product availability', 'The in-app information is the current source of truth'],
      fr: ['La RDC et la République du Congo sont distinguées', 'La couverture dépend des réseaux actifs et du produit', 'Les informations dans l’application sont la référence à jour'],
    },
    next: ['paiement-mobile-money', 'tarifs'],
  },
};

export const commerceLabels = {
  'boutique-en-ligne': { en: 'Online store', fr: 'Boutique en ligne' },
  'logiciel-de-caisse': { en: 'POS software', fr: 'Logiciel de caisse' },
  'paiement-mobile-money': { en: 'Mobile Money payments', fr: 'Paiement Mobile Money' },
  'gestion-des-stocks': { en: 'Inventory management', fr: 'Gestion des stocks' },
  tarifs: { en: 'Pricing', fr: 'Tarifs' },
  pays: { en: 'Availability', fr: 'Pays et disponibilité' },
};

export const commerceMetadata = {
  'boutique-en-ligne': ['Create an Online Store Without Coding | Fondeka Commerce', 'Create a mobile-friendly online store, add products, share your link and accept supported payments with Fondeka Commerce.'],
  'logiciel-de-caisse': ['POS Software and Mobile Cash Register | Fondeka Commerce', 'Manage sales, inventory and customers with Fondeka POS software built for small shops and mobile-first merchants.'],
  'paiement-mobile-money': ['Mobile Money Payments for Online Stores | Fondeka', 'Learn how Fondeka Commerce connects online orders with supported Mobile Money payment methods in African markets.'],
  'gestion-des-stocks': ['Inventory Management for Small Shops | Fondeka Commerce', 'Track products, sales and available stock with Fondeka Commerce inventory management.'],
  tarifs: ['Fondeka Commerce Pricing and Fees', 'See how Fondeka presents online store, POS and transaction fees before merchants confirm an operation.'],
  pays: ['Fondeka Commerce Countries and Availability', 'Check how online store creation, customer payments and withdrawals vary by country and supported network.'],
};
