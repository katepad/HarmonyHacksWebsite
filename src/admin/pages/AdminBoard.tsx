
import contactData from "../../data/Board.json"; 
import '../styles/AdminBoard.css'; 
import '../../server/controller/board'

const AdminBoard = () => {

  return (
    <>
      <h2>Current Board Dashboard</h2> ;
      <Form />
      <Board />
    </>
  );
};

type BoardMember = {
  "id": number;
  "board_name": string;
  "board_position": string,
  "board_email": string;
  "board_image": string;
};

const Form = () => {
  return (        
    <form method="POST" className = "admin-board-form">

      <div>

        <p className = "color-purple"> Name: </p>
        <input type = "text" name = "name" className = "contact-inputs" required/>

        <p className = "color-purple"> Position: </p>
        <input type = "text" name = "position" className = "contact-inputs" required/>

        <p className = "color-purple"> E-mail: </p>
        <input type = "email" name = "email" className = "contact-inputs" required/>

      </div>

      <button className = "contact-submit-button" type = "submit"> Add </button>

    </form>
  );
};

const Board = () => {
  return (
    <section className="admin-board-section">

      <h2 className="page-h2 color-purple">Current Board</h2>

      <div className="admin-board-cards-container">
        {contactData.map((member: BoardMember) => (
          <div key={member.id} className="admin-board-card">
            <div>
              <img className="admin-board-img" src={member.board_image || "/assets/temp.png"} alt={`${member.board_name}`} />
            </div>
            <div>
              <p className="color-pink">Name: {member.board_name}</p>
              <p className="color-darkpurple">Position: {member.board_position}</p>
              <p className="color-pink">E-mail: {member.board_email}</p>
            </div>
            <div className = "admin-board-buttons">
              <button className = "admin-board-delete-button" type = "submit"> Delete </button>
              <button className = "admin-board-edit-button" type = "submit"> Edit </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminBoard;
