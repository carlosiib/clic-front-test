import { useState, useRef } from "react"
import ReactDom from "react-dom"

export default function Modal({ content, isOpen, closeModal, updatedData }) {
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [sucessPost, setSucessPost] = useState(false)
  const [completedRequest, setCompletedRequest] = useState(false)

  const formRef = useRef(null);


  async function submitHandler(e) {
    e.preventDefault()
    setCompletedRequest(true)
    try {

      const put_request = await fetch("https://clic-pup.herokuapp.com/update", {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: formRef.current.id.value, password, firstName, })
      })
      console.log("update", put_request)
      const put_data = await put_request.json()
      console.log("update res", put_data)

      updatedData(put_data)


      if (put_request.status === 200) {
        setSucessPost(true)
        setCompletedRequest(false)

        setTimeout(function () {
          setSucessPost(false)
        }, 2500)
      }

    } catch (error) {
      console.log(error)
    }
  }


  // setId(content[0].id)

  return ReactDom.createPortal(
    <>
      {
        isOpen &&
        <div className="modalBackdrop">
          <div className="modalContainer">
            {!completedRequest ?
              <div className="modalContent">
                <button onClick={closeModal} type="button" className="modalClose" data-dismiss="modal" >
                  <span aria-hidden="true">&times;</span>
                </button>
                {sucessPost && <div className="alert alert-success" role="alert">
                  Customer password created successfully!
                </div>}
                <div>
                  <h3>Customer Information</h3>
                  <p>Name: {content[0].first_name || "firstName"} {content[0].last_name}</p>
                  <p>Email: {content[0].email || "Email Address"}</p>
                </div>
                <form onSubmit={submitHandler} ref={formRef}>
                  <input name="id" value={content[0].id} type="hidden" />
                  <input type="text" placeholder="Name" className="modalForm__input form-control" name="name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  <input type="text" placeholder="New password" className="modalForm__input form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <button type="submit" className="modalForm__input btn btn-primary my-4" >Create password</button>
                </form>
              </div>
              :
              <Snipper />
            }
          </div>
        </div>
      }
    </>,
    document.querySelector("#modal")
  )
}
