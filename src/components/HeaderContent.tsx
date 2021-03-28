interface SelectedGenreProps{
    selectedGenre: {
      title: string;
    }
  }

export function HeaderContent({selectedGenre}:SelectedGenreProps) {
    
    return(
        <header>
         <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>
    )
  }