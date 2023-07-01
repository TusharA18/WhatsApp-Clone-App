import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";

const LeftSearchBar = ({ text, setText }) => {
  return (
    <Container>
      <div className="leftSearchBarConatiner">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search or start new chat..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 47px;
  border-bottom: 1px solid rgb(233, 237, 239);
  display: flex;
  align-items: center;
  justify-content: center;

  & > .leftSearchBarConatiner {
    background-color: rgb(240, 242, 245);
    width: 92%;
    border-radius: 7px;
    padding: 5px;
    display: flex;
    align-items: center;
    height: 50%;

    & > svg {
      margin-left: 10px;
      font-size: 20px;
      color: rgb(84, 101, 111);
    }

    & > input {
      outline: none;
      border: none;
      background-color: inherit;
      margin: 0 15px;
      width: 100%;
      font-size: 14px;
      font-weight: 100;
    }
  }
`;

LeftSearchBar.propTypes = {
  text: PropTypes.string,
  setText: PropTypes.func,
};

export default LeftSearchBar;
