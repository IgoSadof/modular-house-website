<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)

6. **Work with data-base**

    - Create a New User:

    ```shell
    CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
    ```

    Therefore, the first thing to do is to provide the user with access to the information they will need:

    GRANT ALL PRIVILEGES ON * . * TO 'newuser'@'localhost';
    ```

    FLUSH PRIVILEGES;
    ```

    To provide a specific user with a permission, you can use this framework:
    ```shell
    GRANT type_of_permission ON database_name.table_name TO 'username'@'localhost';
    ```

    If you need to revoke a permission, the structure is almost identical to granting it:

    ```shell
    REVOKE type_of_permission ON database_name.table_name FROM 'username'@'localhost';
    ```
    ```shell
    SHOW GRANTS FOR 'username'@'localhost';
    ```
    ```shell
    DROP USER 'username'@'localhost';
    ```
    - Create a New database:

    ```shell
    DROP DATABASE modularh_db;
    CREATE DATABASE modularh_db;
    USE modularh_db;
    SOURCE c:/modularh_db.sql;
    ```
    import database

    ```shell
    USE yourdb;
    source <path_of_your_.sql>
    ```
    show tables

    ```shell
     show tables;
    ```
    
    remove DATABASE

    ```shell
     DROP DATABASE databasename;
    ```
    
    






