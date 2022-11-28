import React from 'react';
const Songcard = () => {
  return (
    <div className="form-group my-4 text-center mt-3 text-light">
            {[1,2,3,4,5,6,7,8,9,10].map((song,i)=>(

                <Songcard
                key={song.key}
                song={song}
                i={i}
                />
            ))}

        
        </div>
  );
};
export default Songcard;