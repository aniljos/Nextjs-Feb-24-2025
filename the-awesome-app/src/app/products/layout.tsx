type ProductsLayoutProps = {
    children: React.ReactNode
}
export default function ProductsLayout(props:ProductsLayoutProps){
    return(
        <div>
            <h5>Products Layout</h5>
            <section>
                {props.children}
            </section>
        </div>
    )
}