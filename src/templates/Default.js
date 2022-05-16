import Header from '../components/Header'

const Default = ({ children }) => {


    return(
        <div>
            <Header />
            {children}
        </div>
    )
}

export default Default