# reddit-back

> Back-end de l’application Reddit-like développé avec **Strapi**.  
> API RESTful sécurisée, gestion des utilisateurs, communautés, posts, commentaires et favoris.

---

## Fonctionnalités

- 🔐 Authentification JWT (via Strapi)
- 🧑‍🤝‍🧑 Gestion des utilisateurs et des rôles
- 🏘️ Création et gestion de communautés
- 📝 Gestion des posts (CRUD)
- 💬 Système de commentaires
- 📌 Sauvegarde (favoris) de posts
- 📦 API REST prête à consommer pour le front-end React

---

## Technologies

| Technologie    | Usage                              |
|----------------|-------------------------------------|
| Strapi         | CMS headless Node.js pour l’API     |
| SQLite         | Base de données par défaut (dev)    |
| JWT            | Authentification sécurisée          |
| Node.js        | Environnement d’exécution           |
| REST API       | Communication avec le front-end     |

---

## Installation & Lancement

### 1/ Cloner le projet

```bash
git clone https://github.com/Nabibouch/reddit.git
cd reddit
git checkout final
```

### 2/Installer les dépendances

```bash
npm install
npm install better-sqlite3 --save
npm run build
```
### 3/ Ajouter les variables d'environnement 

```bash
VITE_API_URL = http://localhost:1337/api
```

### 4/ Lancer le projet

```bash
npm run dev
```

## Membres de l’équipe

- **LMRABET Nabil** — Chef de projet & développeur full-stack
  
- **ANDRIATSEHENO Anjara** — Développeur full-stack
  
- **ELAZZOUZI Ilyas** — Développeur full-stack
