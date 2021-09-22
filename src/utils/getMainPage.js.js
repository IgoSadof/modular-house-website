import { useStaticQuery, graphql } from "gatsby";

function useHome(parent) {
  const data = useStaticQuery(graphql`
    {
      allMysqlParent {
        nodes {
          mysqlId
          pagetitle
          alias
          mysqlParent
        }
      }
      allMysqlValue {
        nodes {
          mysqlId
          tmplvarid
          contentid
          value
        }
      }
    }
  `);
  const parentElements = data.allMysqlParent.nodes.filter(
    (item) => item.mysqlParent === parent
  );

  const houseElements = data.allMysqlParent.nodes.filter(
    (item) => item.alias === "a192"
  );
  console.log("houseElements= ", houseElements);
    }
  });



}
export default useHome;
