import React from 'react';

/**
 * Pass in a list of objects describing <link> elements where each link is in format
 * {
 *      "rel": "...",
 *      "type": "...",
 *      "href": "...",
 *  }
 */
export default function LinkList(props: any){
    let links: HTMLLinkElement[] = [];
    const INPUT: {rel: string; type: string; href: string;}[] = props.props;
    
    INPUT.forEach(element  => {
        let l = document.createElement('link');
        l.rel = element.rel;
        l.type = element.type;
        l.href = element.href;

        links.push(l);
    });  
    
    const HEAD = document.querySelector('head') as HTMLElement;

    links.forEach(link => {
        let lookFor = 'link[href="' + link.getAttribute('href') + '"]';
        if(!HEAD.querySelector(lookFor))
            HEAD.appendChild(link);
        
    });

    return(
        <></>
    )
}