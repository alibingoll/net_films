import React from 'react'
import Movies from '@/mocks/movies.json'
import Genres from '@/mocks/genres.json'
import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

const HomeContainer = ({selectedCategory}) => {
    return (
        <div>
            <FeaturedMovie movie={selectedCategory.movies[0]}/>
            <Categories categories={Genres.genres.slice(0,5)}/>
            {selectedCategory.movies.length > 0 && (
                <MoviesSection title={
                    Genres.genres.find(genre=>genre.id.toString() === selectedCategory.id)?.name ?? ''
                } movies={Movies.results.slice(1,7)}></MoviesSection>
            )
            }
            
            {/* <MoviesSection title={'Populer Films'} movies={Movies.results.slice(1,7)}></MoviesSection>
            <MoviesSection title={'Your Favoriter'} movies={Movies.results.slice(7,13)}></MoviesSection> */}
        </div>
    )
}

export default HomeContainer