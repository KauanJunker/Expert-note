interface NoteCardProps {

}
export function NoteCard(props : NoteCardProps){
    return(
      <button className='rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 
      focus-visible:ring-2 focus-visible:ring-lime-400'>
        <span className='text-sm font-medium text-slate-300'>
          Há 2 dias
        </span>

        <p className='text-sm leading-6 text-slate-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde provident fugit, rerum aspernatur exercitationem necessitatibus voluptatum suscipit explicabo quas recusandae facilis labore natus dolorum nostrum ut consequatur officia soluta!
        </p>

        <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
    </button>
    )
}