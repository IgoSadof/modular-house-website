To run locally:
1 Clone repo. Use development branch for development, production for publishing live version.
2 Use login 'root' and password 'uN1sMBsSHwHS' to get into hosting at 45.135.234.94:1500/ispmgr.
3 Download 'images' directory from https://45.135.234.94:1500/ispmgr#/list/file/2?elid=modular-house.by&elname=modular-house.by&plid=%2F%2Fvar%2Fwww%2Fwww-root%2Fdata%2Fwww&p_num=1 and put it in the same directory repository is (at the same level).
4 Download 'modularh_db' from https://45.135.234.94:1500/ispmgr#/list/db/3?clickstat=yes&p_num=1 and put it in the same directory, near 'images' and the repository directory.
5 Install MySQL from https://dev.mysql.com/downloads/installer/ with Workbench and Server, connecting to localhost (without port), creating default user 'root' with password 'modularhouse'. It is the most complex stuff - just follow all the installation guidlines and install server.
6 Import 'modularh_db'.
7 In MySQL Workbench open localhost connection, go File->New Query:
CREATE USER 'modularh_user'@'localhost' IDENTIFIED BY 'modularhouse';
GRANT ALL PRIVILEGES ON * . * TO 'modularh_user'@'localhost';
ALTER USER 'modularh_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'modularhouse';
FLUSH PRIVILEGES;
DROP DATABASE modularh_db;
CREATE DATABASE modularh_db;
USE modularh_db;
File->Open SQL script->modularh_db.sql - execute

8 Install dependencies with 'npm install'.
9 Build 'npm run start'.
 



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
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

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
    
    






