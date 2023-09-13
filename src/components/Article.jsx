export default function Article({ notice }) {
    return notice.map((e, index) => {
     
        return (
          <div
            key={index}
            className="bg-gray-50 w-80 h-80 p-2 text-center flex flex-col items-center justify-center rounded-lg shadow-lg border-gray-200"
          >
            <div className="h-1/2 flex flex-col items-center justify-between p-1">
                <h2 className="font-bold" key={index}>
                {e.author}
                </h2>
                <p className="text-2x1">{e.title}</p>
                <a className="text-blue-400" href={e.url} target="_blank">link al articulo</a>
            </div>
            {e.urlToImage !== null && (
                <div className="h-1/2 w-full rounded-lg overflow-hidden flex items-center">
                    <img className="w-full h-full" src={e.urlToImage} alt="" />
                </div>
            )}
          </div>
        );
       
    });
  }
  