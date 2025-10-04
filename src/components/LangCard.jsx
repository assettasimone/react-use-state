export default function LangBtn({ title, description }) {


    return (

        <div className="card col-lg-8 col-md-12  m-auto">

            <div className="card-header">
                <h3 className='card-title'>{title}</h3>
            </div>
            <div class="card-body">
                <p className='card-text'>{description}</p>
            </div>
        </div>
    )
} 