# Métamorphose QR

Application iOS, utilisant le framework [React Native](https://facebook.github.io/react-native/),
servant à afficher une page web du site `http://livre.f93.fr/deux/*`
depuis un `QR Code` spécifique, imprimé sur un livret.

## Exemple de QR code valide

Attention, les QR code sont imprimés en miroir, car le dispositif utilise un périscope attaché à la caméra frontale de l’iPad.

![http://livre.f93.fr/deux/](qrcode.png)

Attention, les QR codes hors domaine livre.f93.fr ne sont pas éligibles à la lecture, et sont donc automatiquement filtrés.

## Prérequis

- OSX 10.12 + XCode 8
- nodejs
- npm ou yarn
- React Native 0.38.0

## Installation

Dans le terminal, se rendre dans le dossier du projet,
en utilisant la commande `cd <chemin/du/dossier>`.
Installer les packages via `yarn` 

	yarn install

ou via `npm`

	npm install

## Déploiement sur un iPad

brancher l’iPad (il faut que l’appareil soit enregistré sur `Member Center` par developer.apple.com, en mode Développement) puis

	react-native run-ios --device

## À Propos du projet

- réalisé dans le cadre du projet `Livre Autrement`
- produit par l’association *F93* à Montreuil
- projet `La Métamorphose` (d’après F. Kafka) dirigé par *Bertrand Sandrez*, avec une classe de collège
- présent code source développé par *Arthur Violy*
