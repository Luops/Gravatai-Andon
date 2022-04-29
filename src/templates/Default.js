import Header from '../components/Header'

const Default = ({ children }) => {


    return(
        <div>
            <Header />
            {children}	
            <footer>FOOTER</footer>
        </div>
    )
}

export default Default