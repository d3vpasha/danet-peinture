# Alexandre Danet – Artisan peintre

Site vitrine d'Alexandre Danet, artisan peintre à Sérent (Morbihan) : peinture intérieure, revêtements muraux, ouvertures, ravalement de façade et démoussage, dans un rayon de 40 km.

HTML / CSS / JS natifs, sans build ni dépendance.

## Arborescence

```
index.html                     page unique (sections, sprite d'icônes inline, JSON-LD)
assets/css/styles.css          styles, variables de couleur, mode sombre
assets/js/main.js              menu mobile, apparition au défilement, formulaire mailto, année
assets/img/logo.svg            logo couleur (pastille de nuancier + monogramme AD)
assets/img/logo-mono-blanc.svg logo blanc pour le footer
assets/img/favicon.svg         pastille seule
robots.txt, sitemap.xml        référencement
```

## En local

```sh
python3 -m http.server 8000
```

Puis http://localhost:8000

## Production

https://danet-peinture.vercel.app

## TODO

- Assurance décennale : assureur et numéro de contrat à vérifier
- Liste des communes desservies à confirmer avec l'artisan
- Photos de chantiers terminés à ajouter

## Versions

| Version | Date | Direction visuelle |
|---|---|---|
| v1 | 2026-10-29 | Ambiance nuancier de peintre sur papier clair ; bleu canard + ocre ; hero clair centré sur deux éventails de nuancier et traits de rouleau ; engagements en pastilles de nuancier numérotées ; prestations en tableau réf. / prestation / détail groupé intérieur / extérieur ; chiffres en fiche d'identité avec tampon ; bordures épaisses et ombres portées franches ; titres serif, références monospace ; logo pastille de nuancier AD + wordmark au trait |
