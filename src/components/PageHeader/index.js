import './pageHeader.css';

export const PageHeader = (props) => {
  const { title, activeItem } = props

  return <>
    {/* <!-- Page Title/Header Start --> */}
    <div class="page-title-section section backgroundImage">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="page-title">
              <h1 class="title">{title}</h1>
              <ul class="breadcrumb">
                <li class="breadcrumb-item"><a href="/home">Home</a></li>
                <li class="breadcrumb-item active">{activeItem}</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
    {/* <!-- Page Title/Header End --> */}
  </>
}