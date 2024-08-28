const Redirect = ({ text }: { text: string }) => {

    return (

        <a href="https://wa.me/3417506932" target="_blank" className="mt-auto">
            <button
                className="2xl:text-[1rem] py-[1.5vh] transition duration-200 hover:text-[#a4f6da] px-[2vh] text-[.8rem] m-0 bg-transparent rounded-full text-primary"
            >{text}
            </button>
        </a>
    )
}

export default Redirect
