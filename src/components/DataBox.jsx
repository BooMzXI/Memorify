import Tag from "./Tag";
import '@/app/googleFont.css'

const DataBox = ({ title, description, image, tag, timestamp,loadContent }) => {
  const handleDelete = async () => {
    try {
      const localTimestamp = new Date(timestamp).toLocaleString('en-CA', { timeZone: 'Asia/Bangkok' }).replace(',', '');
      const res = await fetch('/api/content/delete', {
        method: "DELETE",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({ title , timestamp: localTimestamp })
      })
      if (!res.ok) {
        return console.log("Error to delete data")
      }
      const result = await res.json()
      console.log(result)
      loadContent();
    } catch (err) {
      alert("Error deleting content.");
    }
  }
    return (
      <div className="w-full flex items-center justify-center">
        <div className="mt-3 w-full md:w-[70%] h-60 flex bg-gray-700 text-white rounded-[10px]">

          <div className="w-1/4 h-full flex flex-col p-3 justify-center items-center">
            <div className="w-full h-[150px] flex items-center justify-center">
              {image ? (
                <img 
                  src={image} 
                  alt="Preview" 
                  className="w-full h-full object-cover rounded-md" 
                  style={{ maxWidth: "100px", maxHeight: "150px" }}
                />
              ) : (
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500" 
                  alt="Preview" 
                  className="w-full h-full object-cover rounded-md" 
                  style={{ maxWidth: "100px", maxHeight: "150px" }}
                />
              )}
            </div>
          </div>
  
          {/* Content */}
          <div className=" w-3/4 h-full flex flex-col p-2">
            {/* Title */}
            <div className="w-full h-1/6 flex">
              <div className="w-[80%] h-full text-2xl">{title}</div>
              <div className="w-[20%] h-full flex items-center justify-center">
                <button 
                type="button" 
                className="w-full h-full flex items-center cursor-pointer justify-center"
                onClick={handleDelete}
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
  
            {/* Description */}
            <div className="w-full h-2/6">
              <div className="w-full h-[70%] p-1 text-[14px]">
                {description}
              </div>
            </div>
  
            {/* Tags */}
            <div className="w-full h-2/6">
              <div className="w-full h-[30%] p-2 mb-1">
                <b>Tags</b>
              </div>
              <div className="w-full h-[70%] flex items-center justify-center">
                <div className="w-full h-3/4 bg-white mt-1 flex items-center gap-2 overflow-x-auto overflow-y-hidden p-2">
                    {tag.split('-').length > 0 && tag.split('-').map((tag,i) => (
                        <Tag key={i} tags={tag} />
                    ))}
                </div>
              </div>
            </div>
  
            {/* Timestamp */}
            <div className="w-full h-1/6 flex items-center justify-end gap-4 mt-2">
              <p>Created on</p>
              {new Date(timestamp).toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DataBox;
  