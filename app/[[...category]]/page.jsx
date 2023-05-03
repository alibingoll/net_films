import React from 'react';
import HomeContainer from "@/containers/home/home";
import Movies from '@/mocks/movies.json'

const HomePage = ({params,searchParams}) => {
    let selectedCategory = false
    if(params.category?.length>0){
        selectedCategory = true
    }
    return <HomeContainer selectedCategory={{
        id:params.category?.[0] ?? "",
        movies:selectedCategory ? Movies.results.slice(0,7 ) : []
    }} />

    // return <HomeContainer
    // movies={selectedCategory ? Movies.results.slice(0,7) : []} 
    // selectedCategory={selectedCategory} 
    // categoryId={params.category ? params.category[0] : undefined}/>
};

export default HomePage;