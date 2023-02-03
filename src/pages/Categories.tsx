import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import "../css/categories/categories.css"


// Everything routes around this object
// By adding a category: a new link, button and card gets automatically created in the page
// Format: {"name": "...", "description": "..."},
const CATEGORIES = [
    {
        "name": "Minigiochi",
        "description": "I minigiochi sono una categoria di giochi brevi ma che intrattengono molto"
    },
    {
        "name": "Produttivitá",
        "description": "Diversi programmi per potenzaiare la tua produttivitò usando solo una risorsa."
    },
    {
        "name": "Utility",
        "description": "Piccoli aiuti per fare cose semplici, ma in modo più rapido ed efficace."
    },
    {
        "name": "Themes",
        "description": "Pagine web prefabbricate per avere un punto di partenza nei tuoi progetti."
    },

]

// Cards on the right hand side of the screen
class Category extends React.Component{
    private name: string;
    private description: string;
    
    constructor(name: string, description: string) {
        super({});
        this.name = name;
        this.description = description;
    }

    render(): React.ReactNode {
        return(
        <a href={"/" + this.name.toLowerCase()}>
            <article>
                
                    <p className="font-3">{this.name}</p>
                    <p>{this.description}</p>
                
            </article>
            </a>
        )
    }
}

function CategoryList(){
    let list: any = [];
    
    CATEGORIES.forEach(category => {
        list.push(new Category(category.name, category.description).render());
    });
    
    return(
        <>
            {list}
        </>
    );
}

// Buttons on the right side of the screen
class CategoryBtn extends React.Component{
    private name: string;
    
    constructor(name: string) {
        super({});
        this.name = name;
    }

    render(): React.ReactNode {
        return(
            <li><a href={"/" + this.name.toLowerCase()}>{this.name}</a></li>
        )
    }
}
function CategoryBtnList(){
    let list: any = [];
    
    CATEGORIES.forEach(category => {
        list.push(new CategoryBtn(category.name).render());
    });
    
    return(
        <>
            {list}
        </>
    );
}

// Links on the left of the screen
class CategoryLink extends React.Component{
    private name: string;
    
    constructor(name: string) {
        super({});
        this.name = name;
    }

    render(): React.ReactNode {
        return(
            <li><a href={"/" + this.name.toLowerCase()}>{this.name}</a></li>
        )
    }
}
function CategoryLinkList(){
    let list: any = [];
    
    CATEGORIES.forEach(category => {
        list.push(new CategoryLink(category.name).render());
    });
    
    return(
        <>
            {list}
        </>
    );
}

export default function Categories(){
    return(
        <>
            <Navbar />
            <main>
                <aside className="leftList">
                    <div className="options font-1">
                        <p className="font-5">Categorie</p>
                        <ul className="leftUl">
                            <CategoryLinkList />
                        </ul>
                    </div>
                    <p className="font-5" style={{color: "transparent"}}>Categorie</p>
                </aside>
                <section className="rightList">
                    <p className="font-5 txt-center">Introduzione</p>
                    <p className="txt-center">
                        Trova quel che ti serve nel RMHub. <br /><br />
                        Ecco una lista di categorie che puoi trovare nel sito. Scegli quella che ti serve e inizia ad esplorare!
                    </p>
                    <ul className="summary">
                        <CategoryBtnList />
                    </ul>
                    <div className="article-wrapper">
                        <CategoryList /> 
                    </div>
                    <Footer />
                </section>
            </main>
            
        </>
    )
}