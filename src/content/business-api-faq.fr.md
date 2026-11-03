# FAQ API de paiement Fondeka : Mobile Money, crypto et frais

Comprenez l’intégration des paiements Mobile Money et crypto avec Fondeka en RDC et dans les pays africains pris en charge : frais, conditions d’accès et tests en Sandbox.

Fondeka a conçu cette API pour les **étudiants, freelances, petites entreprises et startups qui ne disposent pas encore des documents administratifs nécessaires à une intégration directe avec de nombreux agrégateurs de paiement**. Vous pouvez développer et tester vos paiements avec Fondeka, puis passer aux paiements réels lorsque votre compte et les routes concernées sont prêts.

Ce guide explique les fonctionnalités, l’accès payant, les frais, les pays couverts et les étapes pour tester en Sandbox avant de passer en Live.

**L’essentiel :**

| Question | Réponse courte |
| --- | --- |
| Que puis-je créer ? | Des encaissements et paiements sortants Mobile Money et crypto reliés à votre application. |
| À qui s’adresse l’API ? | Aux étudiants, freelances, développeurs indépendants, petites entreprises et jeunes startups, y compris celles dont les documents sont encore en préparation. |
| Pourquoi payer l’accès ? | Fondeka simplifie l’intégration et le travail opérationnel nécessaires pour se connecter aux agrégateurs de paiement. |
| Quels sont les frais par opération ? | En moyenne, environ 3 % pour l’agrégateur et 2 % pour Fondeka, regroupés en un seul frais d’environ 5 %. Les frais réels varient selon l’opérateur et la route. |
| Où consulter les frais détaillés ? | Dans l’espace API après activation de l’accès, parmi les moyens de paiement disponibles et leurs informations tarifaires actuelles. |
| Puis-je tester sans argent réel ? | Oui. La Sandbox utilise des identifiants distincts, des soldes virtuels et des paiements simulés. |
| Que se passe-t-il lorsque mon entreprise grandit ? | Fondeka suit l’activité et les volumes. Lorsqu’une intégration directe devient plus adaptée, nous vous conseillons et recommandons votre entreprise à un agrégateur pour aider à établir la confiance. |

## API de paiement pour étudiants, freelances et startups

### 1. Qu’est-ce que l’API de paiement Fondeka ?

L’API de paiement Fondeka est une API REST pour encaisser les paiements des clients et envoyer les paiements sortants Mobile Money et crypto pris en charge depuis votre site ou application.

Par exemple, un client commande sur votre site. Votre serveur demande à Fondeka d’encaisser le paiement avec un moyen compatible. Fondeka traite la demande et informe votre serveur lorsque le résultat est connu. Votre application peut alors mettre à jour la commande.

L’API relie votre logiciel à Fondeka. Elle ne remplace ni votre site, ni votre application, ni votre service client.

### 2. Pour qui Fondeka a-t-il créé cette API ?

Nous l’avons conçue en particulier pour :

- Les **étudiants** qui développent un projet, un prototype ou leur premier produit.
- Les **freelances et développeurs indépendants** qui ajoutent des paiements à leurs services ou aux applications de leurs clients.
- Les **petites entreprises** qui souhaitent encaisser et envoyer de l’argent depuis leur logiciel.
- Les **startups** qui construisent un MVP ou lancent leur activité avant d’avoir réuni tous leurs documents administratifs.

Les équipes établies peuvent aussi évaluer si le service répond à leurs besoins. Notre objectif principal est de faciliter les premières intégrations de paiement.

### 3. Les étudiants et freelances peuvent-ils utiliser une API de paiement sans documents d’entreprise ?

Oui. Les étudiants, freelances et jeunes startups peuvent commencer leur intégration de paiement avec Fondeka pendant la préparation de leurs documents d’entreprise. Fondeka simplifie la connexion aux routes prises en charge pendant le développement de l’activité.

Il vous faut néanmoins un compte Fondeka éligible et les vérifications adaptées à votre situation. L’identité, les restrictions du compte et les règles de paiement restent applicables, notamment pour les paiements sortants réels. Commencer sans documents d’entreprise ne signifie pas utiliser le service anonymement.

[Consulter les conditions d’accès à l’API de paiement](/business?lang=fr).

### 4. Qu’est-ce qu’un agrégateur de paiement ?

Un agrégateur relie les entreprises à plusieurs services de paiement, par exemple différents opérateurs Mobile Money. Il évite de construire une connexion distincte avec chaque opérateur.

Une relation directe peut toutefois nécessiter des documents d’entreprise, une configuration technique, le respect des règles de chaque fournisseur et un suivi des paiements. Fondeka simplifie l’accès aux routes prises en charge grâce à son API et à son portail.

### 5. Quelles difficultés Fondeka simplifie-t-il ?

Fondeka propose une manière commune de soumettre les paiements pris en charge, d’identifier les transactions, de suivre leur statut, de recevoir des notifications signées et de consulter les soldes concernés. Le portail Business présente également les moyens disponibles et leurs frais.

Vous développez toujours votre tunnel de paiement, vos commandes, votre récepteur webhook et vos règles métier. Votre équipe s’appuie sur le parcours documenté de Fondeka plutôt que de gérer chaque connexion sous-jacente séparément.

### 6. Quelles opérations l’API couvre-t-elle ?

Les guides publiés décrivent quatre parcours principaux :

| Opération | Fonction | Exemple |
| --- | --- | --- |
| Encaissement Mobile Money | Demande un paiement au compte Mobile Money compatible d’un client. | Un client paie une commande avec son téléphone. |
| Paiement sortant Mobile Money | Envoie de l’argent au compte Mobile Money compatible d’un bénéficiaire. | Votre application paie un fournisseur. |
| Encaissement crypto | Crée des instructions crypto pour un prix exprimé en monnaie fiat. | Un client règle une facture en USD avec un actif et un réseau pris en charge. |
| Paiement sortant crypto | Utilise un solde fiat pour envoyer le montant crypto coté à une adresse compatible. | Votre application paie un bénéficiaire éligible sur le réseau sélectionné. |

L’API propose aussi la recherche de paiements, la consultation des soldes et des outils de test Sandbox.

### 7. Quels produits puis-je créer avec cette API ?

Vous pouvez développer une boutique, une application de réservation, un parcours de facturation pour freelance, un projet étudiant, une application de gestion d’abonnements ou la fonction paiement d’une startup.

Votre application définit ce qui est vendu et ce qui se passe après le paiement. Une application d’abonnements peut, par exemple, gérer ses échéances et demander chaque paiement via un parcours compatible. L’acceptation d’un paiement ne crée pas automatiquement un mandat de débit récurrent ni un service complet d’abonnement.

### 8. Est-ce la même chose que les liens de paiement, boutiques et POS ?

Ce sont des Business Tools complémentaires. Les liens de paiement, boutiques en ligne et POS fournissent des interfaces directement utilisables. L’API relie les paiements à un logiciel que vous ou votre développeur contrôlez.

Selon l’offre affichée pour votre compte, l’API peut être incluse dans un pack Business Tools ou vendue séparément. L’écran d’achat précise les outils débloqués.

### 9. L’API comprend-elle toutes les fonctions de l’application Fondeka ?

Cette API couvre les encaissements et paiements sortants Mobile Money et crypto pris en charge. Les cartes et autres produits de l’application ont leurs propres règles et interfaces.

La présence d’une fonction dans l’application ou d’un nom dans une liste technique ne garantit pas sa disponibilité dans l’API de paiement. Consultez le catalogue et les guides actuels.

### 10. Faut-il savoir programmer ?

Il vous faut un développeur ou une plateforme capable d’envoyer des requêtes sécurisées depuis un serveur et de recevoir les notifications de paiement. Les guides expliquent les requêtes et donnent des exemples ; l’API ne construit pas votre application.

Pour un encaissement avec une interface prête à l’emploi, explorez les liens de paiement, boutiques ou POS Fondeka. Pour intégrer les paiements à votre propre produit, choisissez l’API.

## Couverture Mobile Money : pays, devises et opérateurs

### 11. Dans quels pays et devises l’API de paiement Fondeka est-elle disponible ?

La couverture comprend la RDC (CDF et USD sur les routes compatibles), le Congo-Brazzaville, la Côte d’Ivoire et les autres marchés africains du tableau ci-dessous. La disponibilité dépend des routes activées pour votre compte.

| Pays | Autres noms courants | Devises locales concernées |
| --- | --- | --- |
| République démocratique du Congo | RD Congo, RDC, Congo-Kinshasa | Franc congolais (CDF), et USD sur les routes compatibles |
| République du Congo | Congo-Brazza, Congo-Brazzaville | Franc CFA d’Afrique centrale (XAF) |
| Côte d’Ivoire | Ivory Coast | Franc CFA d’Afrique de l’Ouest (XOF) |
| Gabon | Gabon | Franc CFA d’Afrique centrale (XAF) |
| Kenya | Kenya | Shilling kényan (KES) |
| Mozambique | Mozambique | Metical mozambicain (MZN) |
| Ouganda | Uganda | Shilling ougandais (UGX) |
| Rwanda | Rwanda | Franc rwandais (RWF) |
| Sénégal | Senegal | Franc CFA d’Afrique de l’Ouest (XOF) |
| Sierra Leone | Sierra Leone | Leone sierra-léonais (SLE) |
| Tanzanie | Tanzania | Shilling tanzanien (TZS) |
| Zambie | Zambia | Kwacha zambien (ZMW) |

D’autres pays et routes seront ajoutés avec l’expansion du service.

Ce tableau décrit la couverture et les devises concernées. Il ne garantit pas que chaque opérateur accepte chaque devise, les deux sens de paiement ou tous les choix de règlement. Vérifiez la route actuelle dans votre espace API avant de lancer un parcours.

### 12. La RDC et le Congo-Brazzaville sont-ils la même destination ?

Non. Ce sont deux pays distincts, avec des routes et devises différentes. La RDC utilise généralement le code pays **CD** ; le Congo-Brazzaville, **CG**.

Choisissez le moyen correspondant au pays réel du client ou du bénéficiaire. Des noms d’opérateurs similaires ne rendent pas les routes interchangeables. Vérifiez ensemble le numéro international, le pays et la devise.

### 13. Tous les opérateurs Mobile Money d’un pays sont-ils disponibles ?

Utilisez les opérateurs actuellement affichés pour votre compte et l’opération visée. La couverture d’un pays ne signifie pas que tous ses opérateurs sont connectés ou disponibles en permanence.

La rubrique **Moyens de paiement disponibles** du portail Business donne les identifiants et informations utiles. Les encaissements et paiements sortants d’un même opérateur peuvent avoir des disponibilités, limites et frais différents.

### 14. Puis-je encaisser et envoyer dans tous les pays couverts ?

La disponibilité est vérifiée séparément pour les encaissements et les paiements sortants. Un moyen peut ne fonctionner que dans un sens ou devenir temporairement indisponible.

Avant de proposer une option à vos clients, confirmez le pays, l’opérateur, la devise et le sens. Pour les paiements sortants, l’éligibilité du bénéficiaire et les fonds disponibles comptent aussi. Prévoyez un message utile lorsqu’une route devient indisponible.

### 15. Un client situé dans un autre pays peut-il payer mon entreprise ?

Cela peut être possible si sa route de paiement et votre parcours de paiement et de règlement sont pris en charge. Toutes les combinaisons de pays d’origine, de destination et de devises ne sont pas garanties.

Vérifiez la route dans le portail, puis le parcours Live concerné avant une ouverture large. Pour une activité transfrontalière, précisez les pays et devises nécessaires au support.

### 16. Puis-je utiliser l’USD ou une autre devise que la devise locale ?

Utilisez la devise fiat acceptée par la route de paiement et de règlement sélectionnée. Certains parcours impliquent une conversion ; d’autres imposent une devise précise.

La présence d’une devise dans les portefeuilles ou un exemple ne suffit pas. Vérifiez la conversion, les frais et la disponibilité pour votre requête réelle. Affichez clairement la devise à côté de chaque montant.

### 17. Quels actifs crypto et réseaux puis-je utiliser ?

Utilisez les moyens crypto et réseaux compatibles actuellement renvoyés pour votre compte. Les guides donnent des exemples, notamment l’USDT sur TRC20, sans constituer un catalogue permanent.

L’actif et le réseau doivent correspondre. La prise en charge d’un jeton sur un réseau ne garantit pas sa prise en charge sur un autre. Présentez exactement le réseau, l’adresse, le montant en jetons et l’expiration renvoyés.

### 18. La couverture garantit-elle une disponibilité permanente ?

La couverture signifie que le service comprend des routes pour ce marché. Une opération reste soumise à la maintenance de l’opérateur, à la disponibilité du fournisseur ou des conversions, aux conditions du compte et aux limites de montant.

Prévoyez l’indisponibilité d’une route dans votre interface. Consultez les moyens et frais actuels plutôt que de considérer une capture ou une ancienne liste comme une promesse permanente.

### 19. D’autres pays et devises seront-ils ajoutés ?

Oui, l’élargissement de la couverture est prévu avec le développement des connexions de Fondeka. Consultez l’application, l’espace API et les annonces.

Si votre projet dépend d’un pays, opérateur, actif, réseau ou d’une devise absents, contactez le support avec les détails. N’annoncez une route à vos clients qu’après confirmation de sa disponibilité.

## Accès API, activation et prix des Business Tools

### 20. Pourquoi l’accès à l’API de paiement Fondeka est-il payant ?

L’accès est payant parce que Fondeka simplifie le travail et les difficultés d’intégration avec les agrégateurs. C’est particulièrement utile aux étudiants, indépendants, petites entreprises et startups dont les documents sont encore en préparation.

Votre paiement finance l’environnement et les outils pour vous connecter, tester, gérer les identifiants, comprendre les routes et exploiter votre parcours via Fondeka. Le traitement des opérations est facturé séparément.

### 21. Pourquoi facturer l’accès et chaque opération ?

Ces frais correspondent à deux services distincts :

- **Le paiement de l’accès** active l’API ou l’offre Business Tools affichée pour votre compte.
- **Les frais de transaction** s’appliquent aux opérations effectuées, selon la route et la tarification actuelles.

Payer l’accès ne rend pas le traitement des paiements gratuit. Ce paiement n’est ni un dépôt dans votre portefeuille ni un solde à envoyer à vos clients.

### 22. Combien coûte l’accès à l’API de paiement Fondeka ?

Le prix de l’accès dépend de l’offre API ou Business Tools actuelle de votre compte. Le portail Business affiche le montant, la devise et la durée de facturation avant le paiement.

L’offre peut couvrir le pack Business Tools ou l’API seule. Les prix et offres peuvent évoluer : un ancien message ou le prix d’un autre utilisateur ne définit pas votre offre. Le total peut aussi inclure les frais du moyen utilisé pour payer l’activation.

### 23. L’accès est-il un achat unique ou un abonnement ?

Suivez la durée indiquée sur votre offre. Si elle mentionne un paiement unique ou un accès à vie, lisez son périmètre et ses conditions. Tenez compte de toute durée ou date d’expiration affichée.

Cette FAQ ne remplace pas l’offre de votre compte. Le prix, la durée et les outils inclus peuvent différer d’un compte à l’autre. En cas de doute, demandez au support avant de payer.

### 24. L’achat de l’API débloque-t-il les autres Business Tools ?

Cela dépend de l’offre achetée.

| Offre affichée | Accès débloqué |
| --- | --- |
| Pack Business Tools | Les outils inclus dans le pack : demandes et liens de paiement, boutiques en ligne, POS et API. |
| Offre API individuelle | L’API. Les autres outils nécessitent leur propre accès, sauf si vous le possédez déjà. |

Le choix de l’API peut afficher ses avantages alors que le paiement concerne le pack entier. Lisez les avantages et le périmètre. Le prix et la formule de l’écran d’achat identifient l’offre réelle.

### 25. Que reçois-je exactement après le paiement de l’accès ?

Après confirmation du paiement et activation, vous accédez à l’espace de gestion API couvert par votre offre :

1. **Votre identité Business et son ID**, pour identifier l’intégration.
2. **La gestion des identifiants API**, distincts en Sandbox et Live, selon les règles du compte.
3. **Un secret de signature webhook distinct**, pour vérifier les notifications.
4. **Les guides des quatre parcours**, ainsi que les montants, statuts et erreurs.
5. **Le catalogue des moyens et réseaux crypto disponibles**, avec leurs identifiants et frais actuels.
6. **Les outils Sandbox** : approvisionnement virtuel, soldes, historique et scénarios pris en charge.
7. **Les vues Portefeuilles et Transactions API**, avec l’environnement sélectionné clairement indiqué.
8. **Les contrôles des identifiants**, dont la modification du webhook et la révocation d’une clé.

L’acceptation des paiements Live dépend toujours de leur disponibilité et des vérifications du compte et de la route. L’achat ne fournit ni fonds pour les paiements sortants, ni clients, ni site terminé, ni garantie d’approbation des transactions.

### 26. Une clé API est-elle envoyée automatiquement après le paiement ?

Une fois l’accès actif, vous générez les identifiants dans le portail Business pour le Business et l’environnement souhaités. Le paiement de l’accès et la génération des identifiants sont deux étapes distinctes.

Enregistrez la clé API et le secret webhook lorsqu’ils s’affichent. Les secrets complets ne sont visibles qu’à leur génération. Une clé masquée affichée ensuite sert d’identifiant, pas de remplacement du secret.

### 27. Puis-je lire la documentation avant d’acheter ?

Oui. L’introduction publique et les guides techniques publiés permettent de comprendre le service et de préparer votre projet. La gestion propre au compte et les frais détaillés des moyens disponibles nécessitent l’accès authentifié correspondant.

Lisez les guides et posez vos questions avant d’acheter si votre projet dépend d’un pays, d’un opérateur, d’une fonction ou d’une date de lancement Live. Achetez en comprenant le service dont vous avez besoin.

### 28. Le paiement de l’accès fournit-il des fonds pour les paiements sortants ?

Non. L’accès autorise l’utilisation de l’outil couvert par l’offre. Les paiements sortants nécessitent un solde distinct suffisant, frais compris.

La Sandbox dispose d’un approvisionnement virtuel pour les tests. Ces fonds ne peuvent être retirés ni devenir de l’argent réel. Pour le Live, approvisionnez le portefeuille réel adapté par un parcours Fondeka pris en charge.

### 29. Comment payer l’accès ?

Utilisez les moyens proposés sur l’écran d’activation. Selon la disponibilité, ils peuvent comprendre un solde Fondeka, Mobile Money, la crypto ou des instructions de virement bancaire.

Vérifiez le montant d’accès, les frais de traitement et le total avant de confirmer. Suivez exactement les instructions. Les moyens d’achat de l’accès sont distincts des moyens que votre application peut utiliser via l’API.

### 30. J’ai payé, mais l’accès reste bloqué. Que faire ?

Actualisez votre accès ou vérifiez le statut du paiement existant. Conservez la référence d’achat et le reçu ou les instructions.

Certains moyens aboutissent de manière asynchrone. La soumission du paiement ou le débit d’un compte externe ne prouve pas, à elle seule, l’activation. Ne rachetez pas immédiatement. Si le paiement semble terminé mais l’outil reste fermé, contactez le support avec la référence et l’adresse e-mail du compte.

### 31. Puis-je fermer l’écran de paiement et revenir ensuite ?

Oui. Un paiement accepté et en attente doit être repris avec sa référence et ses instructions existantes. Fermer l’écran ne l’annule pas automatiquement.

À votre retour, vérifiez ce paiement avant d’en démarrer un autre. Si vous avez déjà effectué un virement ou un transfert crypto, ne l’envoyez pas à nouveau simplement parce que l’écran indique encore une attente.

### 32. Que se passe-t-il si le prix change pendant un achat en attente ?

Un achat accepté et en attente conserve son parcours et ses informations tarifaires enregistrés. La réouverture de l’écran ou l’actualisation d’un texte explicatif ne doit pas créer un nouvel achat.

Utilisez les instructions de cet achat et vérifiez son statut. Pour changer un moyen non payé, utilisez uniquement l’option du portail. Une ancienne référence ne peut pas être supposée valable pour un autre montant ou de nouvelles instructions.

### 33. Dois-je payer à nouveau si j’ai déjà accès à l’API ?

Fiez-vous à l’état d’accès actuel du compte. Si l’API est déjà accordée par un pack, un achat individuel ou un autre droit reconnu, vous devez pouvoir l’ouvrir sans racheter le même accès.

L’accès au POS ou aux boutiques seules n’inclut pas automatiquement l’API. Vérifiez votre offre réelle. Contactez le support si un paiement ou un accès antérieur semble absent.

### 34. Payer l’accès garantit-il le traitement de n’importe quel montant ?

Non. L’accès ne supprime ni les limites, ni les exigences de solde, ni les règles opérateur, ni les restrictions du compte, ni le suivi d’activité par Fondeka.

Votre projet doit correspondre aux parcours pris en charge. Si vous prévoyez de gros volumes ou une activité spécialisée, parlez-en à Fondeka avant de vous appuyer sur une configuration opérationnelle particulière.

## Frais de l’API de paiement et exemples

### 35. Quels sont les frais API pour les paiements Mobile Money et crypto ?

Fondeka regroupe les frais de l’agrégateur et ses propres frais en un seul montant par opération de paiement. La moyenne consolidée est d’environ 5 % ; le taux réel dépend de l’opérateur et de la route.

| Composant | Moyenne |
| --- | ---: |
| Frais de l’agrégateur | Environ 3 % |
| Frais Fondeka | Environ 2 % |
| Frais consolidés par opération | Environ 5 % |

Ce sont des moyennes, pas un tarif fixe pour chaque paiement. Les frais réels varient selon l’opérateur, la route, le sens, la devise et le montant. Le détail actuel est disponible dans votre espace API après activation.

### 36. « 3 % plus 2 % » signifie-t-il trois frais séparés ?

Non. Les 3 % et 2 % expliquent les composants du total moyen de 5 %. Vous ne payez pas 3 %, puis 2 %, puis encore 5 %.

Pour une base illustrative de 100 USD, 3 USD pour l’agrégateur et 2 USD pour Fondeka donnent 5 USD au total. La réponse de paiement expose un seul champ `fee`, sans ventilation des composants.

Les frais par opération ne signifient pas de nouveaux frais de traitement chaque fois que vous consultez le même paiement ou recevez une notification répétée. Ces actions ne créent pas un nouvel encaissement ou paiement sortant.

### 37. Pouvez-vous donner un exemple simple à 5 % ?

Pour une base de 100 USD et un taux consolidé exactement égal à 5 %, les frais seraient de 5 USD : à titre illustratif, 3 USD pour l’agrégateur et 2 USD pour Fondeka.

Cet exemple explique la moyenne ; ce n’est pas un devis opérateur. Le calcul réel peut dépendre du montant traité, du mode de frais, de minimums, de paliers, de conversions et d’arrondis. Utilisez les frais et montants renvoyés pour l’opération réelle.

### 38. Pourquoi les frais réels peuvent-ils différer de 5 % ?

Les opérateurs et routes n’ont pas tous la même structure de coûts. Une route peut combiner un pourcentage, un montant fixe, un minimum ou des tranches. Les encaissements et paiements sortants peuvent aussi être tarifés différemment.

Appliquer systématiquement 5 % dans votre code serait donc trompeur. La moyenne explique le modèle ; les informations actuelles de la route et les montants calculés par le serveur déterminent l’opération.

### 39. Où consulter les frais API par opérateur et route de paiement ?

Après activation de l’accès, ouvrez **Guides API → Moyens de paiement disponibles** dans le portail Business. Consultez l’opérateur ou le moyen crypto, pour l’opération et la devise voulues.

Un catalogue ou une fourchette aide à comprendre le prix. Le montant et la destination réels peuvent modifier le routage et le calcul final. Utilisez les montants actuels calculés par le serveur plutôt qu’une estimation issue de la FAQ ou d’une ancienne capture.

### 40. Les frais d’activation sont-ils les frais des transactions API ?

Non. Le paiement d’activation constitue un parcours distinct des encaissements et paiements sortants que votre application effectuera ensuite.

L’écran d’activation affiche ses frais et son total. Le catalogue de l’espace API explique la tarification des opérations. Les frais d’activation ne constituent pas un crédit prépayé pour vos transactions futures.

### 41. Qui paie les frais : le client ou mon entreprise ?

Le mode de frais indique si les frais s’ajoutent à votre prix ou sont déjà compris dedans. Pour un encaissement avec 5 USD de frais déjà calculés :

- **EXCLUSIVE — frais en plus :** vous voulez recevoir **100 USD**. On ajoute 5 USD de frais : le client paie **105 USD** et vous recevez **100 USD**.
- **INCLUSIVE — frais compris :** le client paie **100 USD** au total. On retire 5 USD de frais de cette somme : vous recevez **95 USD**.

Les 5 USD servent uniquement à illustrer le calcul ; les frais réels dépendent de l’opération. Affichez toujours le total au client avant son approbation. Si vous ne précisez pas de mode, la politique par défaut de la route s’applique.

### 42. À quoi correspondent EXCLUSIVE et INCLUSIVE avec des chiffres ?

Supposons que les frais renvoyés soient de 5 USD dans chaque exemple :

| Opération et mode | Montant demandé | Frais | Total encaissé ou débité | Net crédité ou envoyé |
| --- | ---: | ---: | ---: | ---: |
| Encaissement, EXCLUSIVE | 100 USD nets | 5 USD | Le client paie 105 USD | L’entreprise reçoit 100 USD |
| Encaissement, INCLUSIVE | 100 USD au total | 5 USD | Le client paie 100 USD | L’entreprise reçoit 95 USD |
| Paiement sortant, EXCLUSIVE | 100 USD nets | 5 USD | Le portefeuille est débité de 105 USD | Le bénéficiaire reçoit la valeur cotée de 100 USD |
| Paiement sortant, INCLUSIVE | Budget total de 100 USD | 5 USD | Le portefeuille est débité de 100 USD | Le bénéficiaire reçoit la valeur cotée de 95 USD |

Les frais sont supposés déjà calculés. Ces exemples ne signifient pas que toute demande de 100 USD entraîne 5 USD de frais. En crypto, le montant en jetons provient des instructions de conversion renvoyées.

### 43. Que signifient « amount », « fee » et « grossAmount » ?

Dans la réponse compacte :

- **`amount`** est le montant fiat net. Pour un encaissement terminé, il représente le crédit de portefeuille rapproché.
- **`fee`** est le frais consolidé de l’opération.
- **`grossAmount`** est le montant net plus les frais.
- **`currency`** indique la devise fiat de ces montants.

Pour un paiement sortant, le brut correspond à la somme réservée ou débitée. Lisez ces champs ensemble : un chiffre sans devise ou sans mode de frais peut induire en erreur.

Les requêtes utilisent les unités monétaires normales : `10` avec `currency: "USD"` signifie 10 USD, pas 10 cents. Les montants acceptent au maximum deux décimales. Utilisez une arithmétique décimale et ne multipliez pas systématiquement les montants par 100.

[Lire le guide des montants et modes de frais en anglais](https://web.fondeka.com/docs/business-api/concepts.md).

### 44. Les conversions de devises ou taux crypto influencent-ils le résultat ?

Oui. Le montant fiat demandé, la route, une éventuelle conversion et les instructions crypto ont des rôles différents.

Utilisez les montants et devises renvoyés pour le paiement réel. En crypto, suivez la quantité de jetons, l’actif et le réseau indiqués. Ne supposez pas que 100 USD équivalent à 100 jetons, qu’un taux vaut toujours 1:1 ou qu’un taux de test est un cours de marché.

### 45. Le frais consolidé inclut-il tous les frais externes à Fondeka ?

Il décrit les frais renvoyés par Fondeka pour son opération. Il ne garantit pas l’absence de frais pour d’autres actions externes, comme l’approvisionnement d’un portefeuille tiers ou un retrait ultérieur auprès d’un autre service.

Vérifiez le total du paiement Fondeka et les frais distincts annoncés par l’opérateur ou le portefeuille externe. Demandez au support de clarifier le cas d’une route précise si nécessaire.

### 46. Les frais d’encaissement et de paiement sortant sont-ils identiques ?

Ce sont des opérations distinctes, avec une tarification potentiellement différente. Si votre application encaisse puis envoie un paiement, examinez les frais applicables aux deux opérations.

Les frais d’un encaissement ne rendent pas le paiement sortant suivant gratuit. La moyenne de 5 % ne décrit pas le coût total d’un parcours comprenant plusieurs paiements. Estimez votre modèle économique à partir de ses opérations réelles.

### 47. Les frais sont-ils permanents et remboursés automatiquement en cas d’échec ?

Consultez les tarifs actuels pour chaque nouvelle opération. Un paiement API accepté conserve son prix accepté malgré un changement ultérieur de configuration. Les montants rapprochés d’un encaissement crypto terminé peuvent toutefois différer de l’estimation initiale en cas de sous-paiement ou de trop-perçu.

Un statut d’échec ne prouve pas que les fonds ou frais ont été restitués. Le remboursement dépend de l’opération et de la politique applicable. Vérifiez le portefeuille et contactez le support en cas de doute. N’envoyez pas automatiquement un paiement compensatoire.

## Sandbox et Live : tester l’API de paiement

### 48. Qu’est-ce qu’une Sandbox API de paiement et utilise-t-elle de l’argent réel ?

**La Sandbox Fondeka est l’environnement de test de l’API de paiement.** Elle utilise des soldes virtuels et des résultats simulés sans déplacer d’argent réel.

Vous pouvez tester les soumissions, statuts, webhooks signés, échecs et effets sur les portefeuilles virtuels. La Sandbox ne contacte pas les fournisseurs réels et ne déplace pas d’argent réel. Commencez ici avant d’utiliser les fonds de vos clients.

[Lire le guide de test Sandbox en anglais](https://web.fondeka.com/docs/business-api/testing.md).

### 49. Qu’est-ce que le Live ?

**Le Live est l’environnement des paiements réels.** Une opération réussie peut encaisser de l’argent, créditer un portefeuille réel ou débiter des fonds pour un paiement sortant.

Il faut les bons identifiants, l’accès et l’éligibilité du compte, une route compatible et l’ouverture des nouveaux paiements Live par Fondeka. Une intégration Sandbox fonctionnelle prépare le Live ; elle ne constitue pas, à elle seule, une autorisation d’utiliser de l’argent réel.

### 50. Quelle différence entre la démo du portail, la Sandbox et le Live ?

| Environnement | Objectif | Argent réel ? | Prouve qu’un paiement Live fonctionnera ? |
| --- | --- | --- | --- |
| Démo du portail | Explorer l’interface avec des données fictives. | Non | Non |
| API Sandbox | Tester une intégration authentifiée avec des portefeuilles virtuels et résultats simulés. | Non | Non |
| API Live | Traiter des paiements réels pris en charge. | Oui | Seul le résultat effectivement vérifié établit ce qui est arrivé au paiement concerné. |

Ouvrir une démo n’équivaut pas à tester votre serveur avec une clé Sandbox. Gardez l’environnement visible pendant le développement et la consultation des transactions.

### 51. Les clés Sandbox et Live sont-elles différentes ?

Oui. Générez des identifiants distincts par environnement. Les nouvelles clés commencent par `fdk_sandbox_` en Sandbox et `fdk_live_` en Live. Chaque identifiant a aussi son propre secret de signature webhook.

L’environnement dépend de l’identifiant enregistré. Changer une étiquette, un préfixe ou ajouter « sandbox » à une URL ne change pas les droits d’une clé. D’anciens formats valides peuvent rester acceptés : suivez l’environnement enregistré.

### 52. La Sandbox et le Live utilisent-ils des URL API différentes ?

L’URL de base documentée est `https://api.fondeka.com`, avec les routes marchandes sous `/business-api/v1`. Sandbox et Live utilisent les mêmes routes ; les identifiants choisissent l’environnement.

Configurez explicitement l’environnement sur votre serveur. Stockez séparément les identifiants Sandbox et Live et vérifiez l’environnement renvoyé pour chaque paiement ou webhook.

### 53. Faut-il de l’argent réel pour approvisionner un portefeuille Sandbox ?

Non. Un outil d’approvisionnement virtuel ajoute des fonds de test au portefeuille de la devise choisie pour tester les paiements sortants et les calculs.

Ces fonds n’ont aucune valeur réelle. Ils ne modifient pas votre solde réel, ne paient aucun achat réel et ne peuvent pas être retirés. Utilisez uniquement les outils Sandbox ; n’envoyez jamais d’argent ou de crypto réels vers une instruction Sandbox.

### 54. Puis-je tester les conversions en Sandbox ?

Oui. Vous pouvez prévisualiser puis exécuter une conversion virtuelle entre devises de test compatibles. La prévisualisation ne réserve aucun fonds et ne bloque aucun taux. L’exécution est une action distincte utilisant les taux synthétiques configurés.

Ces conversions servent à tester les montants, soldes et historiques. Elles n’établissent ni le taux réel, ni les frais Live, ni la disponibilité d’une route de conversion en production.

### 55. Puis-je tester les échecs, pas seulement les paiements réussis ?

Oui. Le catalogue d’erreurs décrit les simulations compatibles avec l’opération : rejet, fonds insuffisants, annulation, facture crypto expirée, problème réseau ou confirmations en attente, par exemple.

Utilisez l’en-tête documenté `X-Simulate-Error-Code` avec une valeur prise en charge. Certaines simulations rejettent immédiatement la requête ; d’autres acceptent le paiement puis produisent un résultat ultérieur. Votre application doit gérer ces deux situations.

### 56. Puis-je tester un paiement qui reste en attente ?

Oui, lorsqu’un scénario compatible est annoncé dans le catalogue d’erreurs. Par exemple, une simulation de confirmations crypto en attente maintient le statut `PROCESSING`, sans événement de réussite ou d’échec final.

Cela permet de vérifier que votre application ne livre pas, ne libère pas de fonds et ne soumet pas un paiement sortant en double pendant l’attente. L’expiration de votre propre délai ne transforme pas le paiement en réussite.

### 57. Les frais Sandbox correspondent-ils à la moyenne réelle de 5 % ?

Non. La Sandbox utilise des frais synthétiques configurables. Les exemples peuvent appliquer un petit montant fixe, comme 0,30 dans la devise fiat demandée, pour vérifier les calculs.

Ce sont des données de test, pas une offre commerciale. Utilisez les frais Live réels pour calculer vos marges et informer les clients. La moyenne de 3 % plus 2 % concerne la tarification réelle ; elle n’impose pas 5 % à chaque exemple Sandbox.

### 58. Un succès Sandbox prouve-t-il qu’un opérateur acceptera le paiement Live ?

Non. La Sandbox teste le parcours sans requête auprès d’un fournisseur réel. Elle ne prouve pas l’acceptation d’un numéro, d’une adresse crypto, d’un couple pays/devise ou d’un montant réels.

Avant le lancement, confirmez la route, l’éligibilité, les limites, frais et disponibilité Live. Lorsque le service est activé, vérifiez le parcours concerné avec une petite opération réelle adaptée.

### 59. L’achat de l’accès ou la création d’une clé Live active-t-il le Live ?

Non. Ces étapes sont distinctes. Vous pouvez disposer de l’accès et d’une clé Live alors que les nouveaux paiements Live ne sont pas encore ouverts ou sont temporairement suspendus.

Si vous recevez `BUSINESS_API_LIVE_PAYMENTS_DISABLED`, continuez en Sandbox et vérifiez la disponibilité auprès de Fondeka. Ne multipliez pas les tentatives pour contourner la restriction. Les paiements déjà acceptés conservent leur traitement et leur suivi habituels.

### 60. Comment passer de la Sandbox au Live ?

Avant de changer d’environnement :

1. Confirmez l’accès, les vérifications du compte et la disponibilité Live.
2. Vérifiez les moyens, pays, devises, réseaux, limites et frais réels nécessaires.
3. Testez les réussites, échecs, doublons et paiements non résolus en Sandbox.
4. Déployez un webhook HTTPS public qui vérifie les notifications et gère les doublons.
5. Créez et stockez séparément vos identifiants Live.
6. Approvisionnez le portefeuille réel concerné avant les paiements sortants.
7. Effectuez un petit test Live adapté et rapprochez le statut final, la notification et l’effet sur le portefeuille.

Séparez les identifiants et données Sandbox pour éviter qu’un développement ne déclenche un paiement de production.

[Lire la liste de préparation au Live en anglais](https://web.fondeka.com/docs/business-api/go-live.md).

## Démarrage : clés API, Business ID et identifiants

### 61. De quoi ai-je besoin pour commencer ?

Il vous faut un compte Fondeka éligible, l’accès à l’API, votre identité Business et un développeur ou une plateforme exécutant l’intégration de manière sécurisée côté serveur.

Prévoyez aussi une destination webhook HTTPS publique avant de compter sur les notifications automatiques. Vous pouvez préparer votre site et serveur pendant la configuration du compte. Vérifiez la route visée avant de la promettre à vos clients.

### 62. Comment intégrer l’API de paiement Fondeka à mon site ou application ?

1. Créez un compte par le parcours Fondeka pris en charge ou utilisez votre compte existant.
2. Connectez-vous au [portail Business](https://web.fondeka.com).
3. Ouvrez l’espace API et consultez l’offre si une activation est nécessaire.
4. Après activation, vérifiez votre Business ID, les moyens et frais actuels.
5. Générez les identifiants Sandbox et enregistrez les deux secrets en sécurité.
6. Consultez les guides API du portail pour tester les parcours utiles et vérifier les webhooks.
7. Terminez les étapes de préparation Live avant d’utiliser l’argent de vos clients.

### 63. Qu’est-ce que mon Business ID ?

C’est l’identifiant de votre profil Business dans Fondeka. Il figure dans les chemins API documentés et rattache les requêtes au bon Business.

Il diffère du secret API et de la référence d’un paiement. Une clé appartient à un Business précis : changer l’ID dans l’URL ne l’autorise pas à opérer pour un autre Business.

### 64. Puis-je gérer plusieurs entreprises ?

Le portail utilise les profils Business appartenant à votre compte. Lorsque plusieurs profils existent, sélectionnez le bon avant de créer une clé ou de consulter les transactions.

Les identifiants et références de paiement sont propres au Business. Les Business d’un même compte partagent toutefois les soldes concernés de ce compte. Ne supposez pas qu’un profil dispose automatiquement d’un portefeuille financièrement séparé. Contactez Fondeka pour des soldes distincts ou une plateforme destinée à des marchands indépendants.

### 65. Comment obtenir et protéger une clé API Fondeka ?

Une clé API est le secret envoyé par votre serveur dans l’en-tête documenté `X-API-Key`. Après activation de l’accès, générez l’identifiant Sandbox ou Live adapté dans le portail Business, selon les conditions de votre compte.

Conservez-le côté serveur ou dans un gestionnaire de secrets. Ne l’intégrez pas à une page publique, une application mobile, un dépôt Git, une capture ou un exemple partagé. Vos clients utilisent votre application, sans recevoir votre clé secrète.

### 66. Qu’est-ce que le secret de signature webhook ?

C’est un secret distinct qui permet de vérifier qu’une notification a été signée pour votre intégration et n’a pas été modifiée.

La clé API sert aux requêtes ; le secret webhook sert à vérifier les notifications entrantes. Ils ne sont pas interchangeables. Le guide webhook décrit la vérification exacte, notamment la conservation des octets originaux du corps reçu.

### 67. Pourquoi les secrets complets ne sont-ils visibles qu’une fois ?

La génération affiche la clé API complète et le secret webhook. Ensuite, les écrans renvoient des identifiants masqués et des métadonnées, sans réexposer les secrets.

Enregistrez les deux en sécurité à leur création. En cas de perte, générez un remplacement et mettez à jour votre serveur. Un préfixe masqué ne permet pas de reconstruire le secret original.

### 68. Puis-je définir le webhook plus tard ou le modifier ?

Une URL webhook au format HTTPS accepté est obligatoire à la génération. Vous pouvez la préparer avant le déploiement complet du récepteur, mais son enregistrement ne prouve pas que la livraison fonctionne.

Pour une clé active, le portail permet de modifier la destination sans changer la clé ni le secret. Préparez d’abord le nouveau récepteur à vérifier le secret existant. Gardez l’ancien disponible pendant la transition : une tentative déjà en cours peut encore l’utiliser.

### 69. Mon webhook peut-il pointer vers localhost ?

Les livraisons exigent une destination HTTPS publique joignable, un TLS valide et le port HTTPS par défaut ou 443. Une adresse privée ou localhost ne peut pas recevoir directement les notifications.

En développement, utilisez un tunnel HTTPS public adapté ou un récepteur de test déployé qui relaie vers votre environnement local. Vérifiez la réception et la signature d’un événement Sandbox réel avant de vous y fier.

### 70. Que faire si ma clé est exposée ou doit être remplacée ?

Générez un remplacement dans le portail, mettez votre serveur à jour en sécurité et révoquez la clé exposée ou retirée. Ne publiez aucun des secrets en demandant de l’aide.

La révocation n’annule pas les paiements déjà acceptés. Leurs événements webhook restent associés à l’identifiant et au secret d’origine. Conservez le récepteur et la configuration de vérification nécessaires jusqu’au rapprochement de ces paiements.

### 71. Quels langages et outils de développement puis-je utiliser ?

L’API utilise HTTPS et JSON : tout langage ou framework qui les prend en charge peut l’intégrer. Les exemples publiés comprennent Node.js, Python, PHP et cURL.

La documentation fournit aussi une référence OpenAPI et une collection Postman Sandbox. Ces aides ne remplacent pas une configuration sécurisée, des enregistrements durables, la gestion des erreurs et un récepteur webhook vérifié pour la production.

## Encaissements Mobile Money et crypto

### 72. Comment accepter les paiements Mobile Money sur mon site avec Fondeka ?

Votre serveur transmet le montant, la devise fiat, le moyen compatible, le numéro du payeur et un identifiant unique pour les nouvelles tentatives. Fondeka renvoie une référence et traite la demande de manière asynchrone.

Selon l’opérateur, le client doit approuver sur son téléphone. Votre application suit le paiement jusqu’à sa réussite ou son échec. Ne livrez qu’après une fin vérifiée et les contrôles de montant nécessaires.

[Lire le guide d’encaissement Mobile Money en anglais](https://web.fondeka.com/docs/business-api/guides/mobile-money-collection.md).

### 73. Mon client doit-il avoir un compte Fondeka pour payer ?

Les clients des parcours documentés Mobile Money et crypto n’ont pas besoin de compte marchand Fondeka ni d’accès à votre portail Business. Votre entreprise détient le compte et les identifiants API.

En Mobile Money, le payeur utilise le compte compatible associé à son téléphone. En crypto, il suit les instructions de facture depuis un portefeuille ou service externe adapté. Il doit toujours respecter les exigences du moyen utilisé.

### 74. Quel format de numéro de téléphone utiliser ?

Utilisez le format international documenté pour le pays, indicatif compris. N’ajoutez pas un zéro national supplémentaire après l’indicatif.

Vérifiez le numéro avec le client et sa correspondance avec le pays et l’opérateur. Un format valide ne prouve pas que le compte existe, dispose des fonds ou peut approuver l’opération.

### 75. Que se passe-t-il si le client manque de fonds ou n’approuve pas ?

Le paiement peut échouer ou expirer selon le résultat de l’opérateur. Affichez le résultat connu et l’explication sûre renvoyée pour ce paiement.

Tant que le résultat final n’est pas établi, ne lancez pas automatiquement une demande de remplacement. Après un échec confirmé, si le client veut réessayer, créez volontairement une nouvelle tentative avec sa propre identité.

### 76. Comment accepter un paiement crypto pour une facture en devise fiat ?

Vous demandez un prix en devise fiat, par exemple 25 USD, puis choisissez un moyen crypto et un réseau compatibles. Fondeka prépare les instructions de paiement de manière asynchrone.

Lorsqu’elles sont disponibles, affichez l’actif, le réseau, l’adresse, la quantité de jetons, l’expiration ou le lien de facture renvoyés. N’inventez pas d’adresse, ne substituez pas de réseau et ne calculez pas les jetons à partir d’un taux supposé.

[Lire le guide d’encaissement crypto en anglais](https://web.fondeka.com/docs/business-api/guides/crypto-collection.md).

### 77. « 25 USD payés en USDT » signifie-t-il exactement 25 USDT ?

Utilisez le montant en jetons renvoyé. Les champs `amount` et `currency` décrivent la valeur fiat ; les instructions crypto décrivent le transfert à effectuer.

Le mode de frais, la conversion et la route peuvent modifier la quantité. Même si un jeton cherche à suivre une devise, affichez les instructions cotées plutôt que de supposer un rapport universel de 1:1.

### 78. Que faire en cas de sous-paiement, trop-perçu ou facture crypto expirée ?

Consultez le résultat final réel. Le montant d’un encaissement terminé correspond au règlement net rapproché, qui peut différer de l’estimation initiale en cas de sous-paiement ou de trop-perçu.

Prévoyez une politique pour les écarts, par exemple une vérification manuelle de commande si le crédit est insuffisant. Ne demandez pas de payer une facture expirée et ne supposez pas qu’un transfert sur un autre réseau réglera la facture originale.

### 79. Quand puis-je livrer un produit ou un service payé ?

Lorsque votre serveur a confirmé que le bon paiement est `COMPLETED`, appartient au Business et à l’environnement attendus, utilise la bonne devise et règle suffisamment la commande selon votre arrangement de frais.

Une page de succès, une capture client, une réponse HTTP 202 ou un webhook non vérifié ne suffisent pas. Conservez le lien entre commande et paiement et vérifiez le règlement terminé avant de livrer.

## Paiements sortants Mobile Money et crypto

### 80. Comment envoyer un paiement sortant Mobile Money avec l’API ?

Votre serveur demande un paiement vers le numéro international compatible du bénéficiaire, avec le montant fiat, la devise, le moyen et le mode de frais.

Le portefeuille doit couvrir le débit brut, frais compris. À l’acceptation, le montant concerné est réservé ou débité, puis traité. Confirmez le statut final avant d’annoncer au bénéficiaire que le paiement est terminé.

[Lire le guide des paiements sortants Mobile Money en anglais](https://web.fondeka.com/docs/business-api/guides/mobile-money-payout.md).

### 81. Comment envoyer un paiement crypto depuis un portefeuille fiat Fondeka ?

Vous précisez le montant fiat à utiliser, le moyen et réseau crypto compatibles et l’adresse du bénéficiaire. L’opération applique la conversion cotée et réserve ou débite le montant fiat brut du portefeuille.

Le bénéficiaire reçoit la quantité de jetons cotée sur le réseau choisi. Vérifiez soigneusement l’adresse et le réseau : une erreur peut être irrécupérable. Des adresses d’apparence similaire ne prouvent pas leur compatibilité.

[Lire le guide des paiements sortants crypto en anglais](https://web.fondeka.com/docs/business-api/guides/crypto-payout.md).

### 82. Dois-je approvisionner le portefeuille avant un paiement sortant ?

Oui. Le portefeuille adapté doit couvrir le débit total, pas seulement le montant destiné au bénéficiaire.

Un paiement EXCLUSIVE de 100 USD avec 5 USD de frais nécessite 105 USD. Utilisez le prix réellement renvoyé. La Sandbox utilise des fonds virtuels ; le Live, des fonds réels. Un encaissement en attente ne finance pas un paiement sortant avant sa réussite et son crédit.

### 83. Pourquoi un paiement sortant est-il rejeté malgré un moyen présent au catalogue ?

Le catalogue décrit les choix configurés. La soumission vérifie aussi le bénéficiaire, le montant, la devise, les conditions du compte, les limites, les règles d’approvisionnement et la disponibilité actuelle du fournisseur.

Certaines routes peuvent dépendre de l’éligibilité du bénéficiaire ou d’un approvisionnement antérieur. Le catalogue aide à choisir les identifiants et comprendre les frais ; il n’approuve pas tous les bénéficiaires ou toutes les demandes.

### 84. Le portefeuille est-il débité à nouveau à la fin du paiement sortant ?

Le montant brut est réservé ou débité à l’acceptation. La fin de ce même paiement ne crée pas un second débit.

Conservez la référence et l’identifiant de nouvelle tentative d’origine. Soumettre un nouveau paiement logique parce que le précédent semble lent peut créer un paiement distinct. Évitez les doublons et rapprochez d’abord l’opération originale.

### 85. Après un échec, l’argent revient-il immédiatement au portefeuille ?

Ne le déduisez pas du seul statut d’échec. Le remboursement dépend de la politique applicable et du résultat financier établi. Certaines situations exigent un rapprochement ou un suivi manuel.

Vérifiez les écritures du portefeuille et la référence. Si la restitution est incertaine, contactez le support. Un paiement non résolu peut rester en traitement avec des fonds réservés ; en envoyer un autre peut créer un doublon indésirable.

### 86. Puis-je annuler, inverser ou rembourser tous les paiements via l’API ?

Le contrat marchand publié ne fournit pas de point d’accès universel d’annulation, d’inversion ou de remboursement pour chaque paiement. Un bouton « Annuler » dans votre application ne doit pas promettre d’annuler une opération déjà acceptée par Fondeka.

Contactez le support avec la référence. La récupération dépend du statut, du moyen et du résultat financier réel. N’envoyez pas automatiquement un paiement sortant compensatoire.

## Portefeuilles API, devises et règlement

### 87. Où va l’argent encaissé ?

Un encaissement terminé crédite le portefeuille fiat concerné du compte Fondeka propriétaire du Business, selon le règlement confirmé. Le parcours crypto documenté règle les fonds confirmés en monnaie fiat.

La soumission seule ne rend pas l’argent disponible. Vérifiez la fin, la devise réglée et le net réel. Pour plusieurs Business ou commandes, conservez vos propres enregistrements d’affectation.

### 88. Le règlement est-il automatiquement un virement vers mon compte bancaire ?

Le parcours documenté crédite le portefeuille du compte Fondeka. Ce crédit ne doit pas être confondu avec un règlement bancaire externe automatique.

Un transfert ultérieur constitue une action distincte, via un parcours de compte ou paiement sortant pris en charge, avec ses frais, disponibilités et conditions. Confirmez tout besoin de règlement bancaire particulier avant de construire vos opérations autour de cette hypothèse.

### 89. Quelle différence entre devise de paiement, devise du portefeuille et actif crypto ?

Ces éléments décrivent différentes parties de l’opération :

- La **devise fiat de la requête ou du portefeuille** représente la valeur monétaire, par exemple USD, CDF ou KES.
- Le **moyen de paiement** identifie l’opérateur ou l’actif crypto utilisé.
- Le **réseau crypto et le montant en jetons**, le cas échéant, décrivent les instructions blockchain.

Gardez-les distincts dans votre application. Sélectionner un moyen USDT ne signifie pas remplacer la devise fiat USD de la requête par `USDT`.

### 90. Où voir les soldes API et l’historique des paiements ?

Utilisez les vues dédiées **Portefeuilles** et **Transactions** de l’espace API, ou les points d’accès documentés de consultation des soldes et paiements. Sélectionnez le bon Business et le bon environnement.

Les paiements API ont leur propre historique. La liste générale de l’application mobile ne contient pas nécessairement chaque paiement API. De même, une vue Live ne permet pas de retrouver une activité virtuelle Sandbox.

### 91. Les soldes Sandbox et Live sont-ils mélangés ? Et ceux de plusieurs Business ?

Les soldes virtuels Sandbox sont séparés des soldes réels Live. Un paiement de test ne peut pas financer votre portefeuille Live ni dépenser votre argent réel.

Dans un même environnement, les soldes concernés appartiennent au compte propriétaire. Plusieurs Business de ce compte peuvent donc les partager, même avec des identifiants, références et profils distincts. Organisez votre comptabilité en conséquence.

### 92. Combien de temps prend un paiement et quelles limites s’appliquent ?

Le délai dépend du moyen, de l’approbation client, du fournisseur et, en crypto, des confirmations réseau. Il n’existe pas de délai unique pour tous les pays et opérations.

Les minimums, maximums, vérifications et conditions de solde varient aussi selon la route et le compte. Vérifiez votre cas actuel. Une requête acceptée peut rester non résolue : l’expiration d’un délai dans votre interface ne prouve pas un échec.

## Statuts de paiement, webhooks et reprises idempotentes

### 93. Que signifient les statuts ACCEPTED, PROCESSING, COMPLETED et FAILED ?

L’API de paiement Fondeka utilise quatre statuts pour les opérations Mobile Money et crypto :

| Statut | Signification | Action de votre application |
| --- | --- | --- |
| `ACCEPTED` | Requête acceptée et mise en file d’attente. | Conserver la référence et attendre le résultat. |
| `PROCESSING` | Exécution commencée ou résultat encore en cours d’établissement. | Afficher une attente et poursuivre les vérifications de manière raisonnable. |
| `COMPLETED` | Paiement terminé. | Vérifier le propriétaire, l’environnement, la devise et le montant réglé avant de livrer. |
| `FAILED` | Échec établi, y compris les annulations ou expirations applicables. | Expliquer l’échec connu et rapprocher l’effet sur le portefeuille ou le remboursement. |

« En attente » est une description utile pour les clients, mais `PENDING` n’est pas un statut supplémentaire de ce contrat marchand.

[Lire la référence des statuts de paiement en anglais](https://web.fondeka.com/docs/business-api/concepts.md).

### 94. HTTP 202 signifie-t-il que mon client a payé ?

Non. `202 Accepted` signifie que Fondeka a accepté la demande pour un traitement asynchrone. La réponse contient généralement un paiement `ACCEPTED` et sa référence Fondeka.

L’opération peut réussir ou échouer plus tard. Ne marquez pas une commande comme payée, ne livrez pas et n’annoncez pas un paiement sortant terminé sur la seule base d’un code 202.

### 95. Quelle différence entre référence Fondeka et référence de commande ?

`fondekaReference` identifie le paiement Fondeka. Conservez-la exactement et utilisez-la pour consulter son statut.

`orderReference` est votre référence facultative de commande, facture ou événement métier. Stockez un lien fiable entre votre enregistrement et le paiement. Elle ne remplace pas la clé d’idempotence distincte qui évite les soumissions en double.

### 96. Qu’est-ce qu’un webhook ?

C’est une notification automatique de Fondeka à votre serveur lorsqu’un paiement atteint un résultat final pris en charge. Votre application peut ainsi mettre à jour une commande sans dépendre d’un navigateur resté ouvert.

Les événements couvrent les encaissements et paiements sortants réussis ou échoués. Les paiements acceptés ou en traitement ne produisent pas d’événement final simplement parce que le temps passe. Vous pouvez aussi consulter le point d’accès de recherche du paiement.

### 97. Pourquoi vérifier les signatures et gérer les doublons webhook ?

N’agissez sur une notification qu’après vérification de sa signature, de sa fraîcheur et de l’intégration et de l’environnement attendus. Sinon, une requête falsifiée pourrait être prise pour une confirmation.

La livraison peut se répéter, notamment si un accusé de réception est perdu. Stockez les identifiants d’événements vérifiés et rendez la livraison de commande idempotente pour une même référence. Deux réceptions ne doivent ni livrer deux fois un produit numérique ni déclencher un autre paiement sortant.

[Lire le guide des signatures webhook et des doublons en anglais](https://web.fondeka.com/docs/business-api/webhooks.md).

### 98. Que se passe-t-il si mon récepteur webhook est indisponible ?

Fondeka réessaie selon sa politique de livraison : la documentation actuelle prévoit jusqu’à dix tentatives avec des délais croissants. Une redirection n’est pas considérée comme une réception réussie.

Votre application doit aussi consulter la référence enregistrée pour rapprocher le résultat. Réparez le récepteur plutôt que de créer un nouveau paiement. Changer l’URL ne rejoue pas automatiquement tous les événements déjà livrés ou dont les tentatives sont épuisées.

### 99. Comment les clés d’idempotence évitent-elles les paiements API en double ?

C’est un identifiant unique pour une opération voulue. En cas de nouvelle tentative après un problème de connexion, renvoyez la même clé et les mêmes informations. Fondeka peut ainsi reconnaître la demande existante au lieu de créer un autre paiement.

Utilisez une autre clé pour un paiement réellement nouveau. Stockez durablement la clé et la requête originales côté serveur. Réutiliser une clé avec des informations différentes provoque un conflit plutôt qu’une modification sûre de l’opération.

[Lire le guide de l’idempotence et des reprises sûres en anglais](https://web.fondeka.com/docs/business-api/concepts.md).

### 100. Que faire après un délai dépassé, une réponse perdue ou un traitement bloqué ?

Conservez la clé d’idempotence, la requête et toute référence déjà reçue. Consultez le paiement ou, lorsque c’est approprié, renvoyez la même soumission logique avec sa clé d’origine et un contenu inchangé.

Ne générez pas automatiquement une nouvelle clé pour un nouvel encaissement ou paiement sortant. Un délai réseau dépassé indique l’absence de réponse chez vous, pas l’absence d’un paiement accepté. Faites examiner les attentes prolongées par le support en gardant leurs références.

## Sécurité de l’API et vérification d’identité

### 101. Accepter les entreprises sans documents signifie-t-il ne faire aucun contrôle ?

Non. Fondeka facilite l’intégration pendant les démarches administratives, mais les conditions d’identité, d’activité autorisée, de sécurité et de paiement restent applicables.

Des informations peuvent être demandées pour vérifier votre compte ou examiner votre activité. Certaines opérations, surtout les paiements sortants, ont des conditions supplémentaires. Demandez au support ce qui s’applique à votre situation avant le Live.

### 102. Tous les types d’activité peuvent-ils utiliser l’API ?

Votre activité doit être éligible chez Fondeka et auprès des fournisseurs concernés. Payer l’accès n’autorise pas une activité restreinte et ne remplace pas les règles du pays ou de la route.

Si votre modèle implique d’encaisser pour d’autres marchands, de conserver des fonds pour des tiers ou un parcours spécialisé, expliquez-le avant le lancement. Une intégration standard n’inclut pas automatiquement une plateforme, un séquestre ou l’ouverture de comptes pour d’autres marchands.

### 103. Quelles sont mes responsabilités comme propriétaire de l’activité ?

Décrivez votre activité avec exactitude, protégez les secrets, affichez les bons montants, vérifiez les bénéficiaires et gardez des enregistrements fiables. Votre application doit vérifier la fin d’un paiement avant de livrer et gérer les erreurs sans doublons.

Vous restez responsable de votre application et des échanges avec vos clients. Fondeka fournit la connexion de paiement et les outils associés ; le service ne résout pas automatiquement les litiges sur vos produits ou services.

### 104. Dois-je transmettre ma clé API au support ?

N’incluez jamais de clés API, secrets webhook, mots de passe, codes de connexion ou PIN Mobile Money d’un client dans un message, une capture ou une demande publique.

Le support peut enquêter avec le Business ID, l’environnement, la référence Fondeka, l’identifiant de requête, l’heure approximative et la description. Ne communiquez les données client sensibles que par le canal approprié et seulement si nécessaires.

### 105. Mon application doit-elle prévoir ses propres contrôles de sécurité ?

Oui. Gardez les secrets côté serveur, utilisez HTTPS, limitez les personnes autorisées à demander des paiements sortants, vérifiez les webhooks et protégez le lien entre commandes et paiements. Séparez le test et la production.

Empêchez aussi les soumissions accidentelles par double clic et rendez la livraison idempotente. Ces contrôles complètent les validations et protections de l’API ; ils font partie d’une fonction paiement fiable.

## Croissance et intégration directe avec un agrégateur

### 106. Fondeka suit-il l’activité de chaque entreprise ?

Oui. Fondeka suit l’activité et les volumes de chaque entreprise utilisant le service pour comprendre sa croissance, examiner son utilisation et évaluer si l’intégration reste adaptée.

Gardez vos informations Business à jour et soyez prêt à expliquer l’activité à l’origine des transactions si nécessaire. Le suivi continue pendant votre développement ; l’accès ne remplace pas un profil exact.

### 107. Que se passe-t-il lorsque mes volumes deviennent importants ?

Lorsque vos volumes rendent une relation directe plus adaptée, nous vous conseillons de vous intégrer directement avec un agrégateur.

Fondeka vous aide à démarrer et construire une activité qui fonctionne. En grandissant, une connexion directe peut mieux répondre à vos besoins de prix, d’exploitation et de gestion. Nous en discutons avec vous plutôt que de présenter la moyenne Fondeka comme l’unique option à long terme.

### 108. Fondeka recommandera-t-il mon entreprise à un agrégateur ?

Oui. Dans cette discussion de croissance, nous recommandons votre entreprise à un agrégateur adapté afin d’aider à établir la confiance et de donner du contexte sur votre activité chez Fondeka.

Cette recommandation ne garantit ni l’acceptation ni un tarif particulier. L’agrégateur décide de l’entrée en relation et peut demander des documents, vérifications et informations supplémentaires. Votre préparation et votre historique restent importants.

### 109. Quel volume déclenche une recommandation et comment me préparer ?

Cette FAQ ne fixe aucun seuil public unique pour toutes les activités et routes. Contactez Fondeka à mesure que vos volumes augmentent pour évaluer la configuration adaptée.

Tenez à jour vos informations, vos démarches administratives et vos enregistrements de paiement. Préparez l’équipe technique à la prochaine intégration. En cas de migration, rapprochez correctement les paiements Fondeka existants, les soldes et les obligations webhook.

## Résolution des erreurs API et assistance

### 110. Pourquoi l’accès est-il requis alors que je suis connecté ?

La connexion identifie votre compte Fondeka ; elle ne signifie pas que l’accès API est actif.

Vérifiez que votre offre inclut l’API et que l’activation est terminée. Si vous avez déjà payé ou eu accès, actualisez l’état et contactez le support avec la référence avant d’effectuer un autre paiement.

### 111. Pourquoi puis-je créer une clé mais pas un paiement Live ?

La gestion des identifiants et l’acceptation de nouveaux paiements Live sont distinctes. Une clé Live ne contourne ni une suspension, ni une condition du compte, ni une restriction de route, ni un manque de fonds.

Lisez l’erreur. Pour `BUSINESS_API_LIVE_PAYMENTS_DISABLED`, utilisez la Sandbox et vérifiez l’ouverture auprès de Fondeka. Pour une autre exigence, corrigez le problème avant de réessayer.

### 112. Pourquoi une erreur « unauthorized » ou « forbidden » ?

Une erreur d’authentification peut indiquer une clé absente, incorrecte ou révoquée. Une erreur d’autorisation peut concerner le Business, l’accès, les restrictions du compte, le Live ou une clé Live utilisée pour une opération réservée à la Sandbox.

Vérifiez le code exact et l’identifiant de requête. Les appels marchands utilisent la clé API Business ; la gestion du portail utilise la session du propriétaire connecté. Ne les substituez pas.

### 113. Pourquoi un moyen, une devise ou un réseau sont-ils indisponibles ?

La combinaison peut être non prise en charge, temporairement indisponible, restreinte pour le compte ou incompatible avec le montant ou la destination. Actualisez le catalogue et vérifiez les champs ensemble.

Une valeur d’énumération ou un ancien exemple ne garantit pas chaque route. Affichez l’erreur et ne proposez une alternative compatible que lorsqu’elle convient. Ne changez pas silencieusement la route ou le réseau.

### 114. Pourquoi des fonds insuffisants alors que mon solde couvre le montant ?

Un paiement sortant exige le brut, frais compris. Vérifiez la devise, l’environnement, le solde réellement disponible et les fonds déjà réservés par d’autres opérations.

Par exemple, 100 USD disponibles ne couvrent pas un paiement EXCLUSIVE de 100 USD si le débit total vaut 105 USD. Un solde Sandbox ne finance pas non plus un paiement Live.

### 115. Que signifie un conflit d’idempotence ?

Un identifiant de nouvelle tentative est déjà associé à des informations différentes. Le montant, bénéficiaire, moyen, devise ou un autre élément pertinent d’une requête antérieure a peut-être changé.

Récupérez et rapprochez l’opération originale avant de décider d’en créer une nouvelle. Ne répondez pas automatiquement au conflit par une autre clé, surtout pour un paiement sortant : cela pourrait provoquer un second paiement indésirable.

### 116. Comment gérer les limites de débit et les erreurs temporaires ?

Lisez le code de réponse, conservez l’identité de la requête et espacez raisonnablement les tentatives. Répéter sans attendre peut compliquer la résolution.

Les quotas peuvent varier selon le point d’accès. L’approvisionnement Sandbox permet actuellement jusqu’à 1 000 000 d’unités virtuelles par ajout et 100 nouveaux ajouts par portefeuille de compte et devise, par jour UTC. Rejouer un ajout identique réussi ne consomme pas de place supplémentaire. Ces limites de test ne décrivent pas la capacité Live. Discutez de vos volumes de production avec Fondeka.

### 117. Pourquoi un paiement API terminé n’apparaît-il pas dans l’historique habituel de l’app ?

Les paiements Business API ont des vues dédiées. Ouvrez les Transactions API du portail ou consultez le paiement avec sa référence Fondeka exacte.

Vérifiez le Business et l’environnement. Les enregistrements Sandbox sont séparés du Live. Si le paiement manque toujours dans la bonne vue, transmettez sa référence et l’identifiant de requête au support.

### 118. Quelles informations transmettre au support ?

Incluez :

- Le problème et le résultat attendu.
- Votre Business ID et l’environnement Sandbox ou Live.
- L’opération : encaissement, paiement sortant, activation, gestion d’identifiants ou autre.
- La référence de paiement ou d’achat Fondeka, si elle existe.
- L’identifiant de requête, le code d’erreur et la date et l’heure approximatives.
- Le pays, l’opérateur ou le réseau crypto, la devise et le montant concernés, si utiles.
- Les vérifications déjà effectuées, avec tous les secrets retirés des captures et exemples.

Ces éléments aident à distinguer un paiement en traitement d’un problème d’accès, de configuration, d’intégration ou de fournisseur.

### 119. Comment contacter Fondeka et faut-il le faire avant de payer ?

Utilisez [l’assistance Fondeka](https://www.fondeka.com/support?lang=fr) ou écrivez à [info@fondeka.com](mailto:info@fondeka.com).

Contactez-nous avant l’achat si votre décision dépend d’un opérateur, d’un couple pays/devise, d’une date Live, d’une exigence documentaire, d’un accord de frais ou d’un modèle à fort volume. Décrivez votre projet et son parcours de paiement pour que nous vous aidions à évaluer les étapes adaptées.

### 120. Quel est le résumé avant de me décider ?

Fondeka aide les étudiants, freelances, petites entreprises et startups à intégrer les paiements pris en charge pendant le développement de leur activité et de leurs démarches administratives.

Vous payez l’accès API ou le pack, puis les frais applicables aux opérations utilisées. Le modèle moyen regroupe **environ 3 % de frais agrégateur et 2 % de frais Fondeka en un seul frais d’environ 5 % par opération** ; les tarifs réels sont visibles après activation. Testez avec de l’argent virtuel en Sandbox, confirmez séparément le Live et intégrez la sécurité et les confirmations. Avec votre croissance, Fondeka peut vous guider et vous recommander pour une intégration directe avec un agrégateur.

## Glossaire API de paiement et documentation développeur

| Terme | Explication simple |
| --- | --- |
| API | Une manière documentée pour votre logiciel de communiquer avec Fondeka. |
| Agrégateur | Un service reliant les entreprises aux opérateurs ou réseaux de paiement pris en charge. |
| Encaissement | Recevoir le paiement d’un client. |
| Paiement sortant | Envoyer de l’argent à un bénéficiaire. |
| Devise fiat | Une monnaie nationale ou régionale, comme USD, CDF ou KES. |
| Montant net | Le montant restant ou envoyé après application de la relation de frais. |
| Montant brut | Le net plus les frais consolidés de l’opération. |
| Règlement | Le résultat financier établi au rapprochement, notamment le crédit du portefeuille concerné. |
| Sandbox | L’environnement de test avec argent virtuel et résultats simulés. |
| Live | L’environnement de production où de l’argent réel peut être déplacé. |
| Business ID | L’identifiant du profil Business utilisé par l’intégration. |
| Clé API | Le secret qui authentifie les requêtes marchandes de votre serveur. |
| Webhook | Une notification envoyée par Fondeka sur le résultat d’un paiement. |
| Secret de signature | Un secret distinct pour vérifier l’authenticité des webhooks. |
| Clé d’idempotence | Un identifiant pour rattacher une nouvelle tentative sûre à la même opération. |
| Référence Fondeka | L’identifiant utilisé pour retrouver et rapprocher un paiement Fondeka. |
| Référence de commande | Votre référence reliant le paiement à une commande ou facture. |
| KYC | La vérification d’identité et du compte, appelée « Know Your Customer ». |
| MVP | Une première version fonctionnelle d’un produit pour valider une idée. |

Pour commencer :

- [Ouvrir le portail Business Fondeka](https://web.fondeka.com).
- [Découvrir l’introduction publique à l’API](https://www.fondeka.com/docs?lang=fr).
- [Ouvrir les guides API du portail](https://web.fondeka.com/developers/guides).
- [Lire les concepts de paiement et portefeuilles en anglais](https://web.fondeka.com/docs/business-api/concepts.md).
- [Lire le guide de test en anglais](https://web.fondeka.com/docs/business-api/testing.md).
- [Lire le guide webhook en anglais](https://web.fondeka.com/docs/business-api/webhooks.md).
- [Lire le guide de passage en Live en anglais](https://web.fondeka.com/docs/business-api/go-live.md).
- [Télécharger la référence OpenAPI](https://web.fondeka.com/docs/business-api/openapi.v1.json).
- [Télécharger la collection Postman Sandbox](https://web.fondeka.com/docs/business-api/postman.v1.json).
- [Contacter l’assistance](https://www.fondeka.com/support?lang=fr).
- [Lire le contrat utilisateur](https://www.fondeka.com/end-user-agreement?lang=fr).
- [Lire la politique de confidentialité](https://www.fondeka.com/privacy?lang=fr).

Dernière révision : 3 novembre 2026. Les offres du compte, les routes activées et les montants renvoyés pour chaque opération déterminent ses conditions applicables.
