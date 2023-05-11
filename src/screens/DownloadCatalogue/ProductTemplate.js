import _ from 'lodash'

const ProductTemplate = (props) => {

  const { productList = [] } = props;

  let updatedProductList = _.chunk(productList, 2);

  const styles = {
    page: {
      padding: '3px',
      marginLeft: "3rem",
      marginRight: "3rem",
      "page-break-after": "always"
    },

    columnLayout: {
      display: "flex",
      justifyContent: "space-between",
      margin: "2rem 0 3rem 0",
      gap: "2rem"
    },

    column: {
      display: "flex",
      flexDirection: "column"
    },

    spacer2: {
      height: "2rem"
    },

    fullWidth: {
      width: "50%",
      height: "50%"
    },

    marginb0: {
      marginBottom: 0
    }
  };

  return (<>
    <div style={styles.page}>
      <div>
        <h2 style={styles.introText}>
          Product information
        </h2>
      </div>
      {
        updatedProductList.map(productMapping => <div style={styles.columnLayout}>
          {productMapping.map(item => (<div style={styles.column}>
            <img style={styles.fullWidth} src={require(`../../productList/${item.imagePath}.jpg`)} />
            <h4 style={styles.marginb0}>{item.productName}</h4>
            <p>{item.description}</p>
          </div>)
          )}
        </div>)
      }
    </div>
  </>)
};

export default ProductTemplate;
