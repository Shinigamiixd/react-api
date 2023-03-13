import styles from "./Product.module.css"

const Product = (props) => {
    console.log(props.products)
    return (
        <div className={styles.productlist}>
            {props.products.map(product => {
                return (
                    <div className={styles.productcard} key={product.id}>
                      <div className={styles.imgdiv}>
                        <img src={product.image} alt="" className={styles.productimage}/>
                      </div>
                        <h4 className={styles.productcardtitle}>{product.title}</h4>
                        <div className={styles.priceflex}>
                          <h4 className={styles.productcardprice}>${product.price}</h4>
                          <button className={styles.addbutton}>Add to cart</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Product
