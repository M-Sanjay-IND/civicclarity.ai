function NavBar(){
    return(
        <div className="bg-black text-white p-4 flex justify-between items-center
        w-screen h-15">
            <h1 className="text-3xl font-bold underline">CivicClarity.AI</h1>
            <ul className="flex gap-10 space-x-4 mt-2 text-xl">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default NavBar;