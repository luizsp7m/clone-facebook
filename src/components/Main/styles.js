import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const StorieSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 120px;
  height: 200px;
  background: #999;
  border-radius: 8px;
  margin: 0px 5px 0px 5px;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: url(${props => props.image});
  background-size: cover;
  background-position: center;
  cursor: pointer;

  &:hover {
    opacity: .95;
  }

  > div {
    height: 38px;
    width: 38px;
    border-radius: 38px;
    border: 3px solid #0B83ED;
    background: #FFF;
  }

  > span {
    color: #FFF;
    font-weight: 600;
  }
`;


export const PostContainer = styled.div`
  margin-top: 24px;
  height: 123px;
  width: 520px;
  background: #FFF;
  border-radius: 10px;
  padding: 8px 16px;
  /* box-shadow: 2px 2px 3px rgba(0, 0, 0, .09); */
  border: 1px solid rgba(0, 0, 0, .1);

  > div {
    display: flex;
    justify-content: space-between;

    > input {
      width: 100%;
      margin-left: 16px;
      padding: 8px 16px;
      border: none;
      outline: none;
      background: #E4E6E8;
      border-radius: 25px;
      font-size: 16px;
      color: #333;
    }

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      > span {
        margin-left: 8px;
        font-size: 15px;
        font-weight: 600;
        color: #717376;
      }
    }
  }

  > hr {
    margin: 16px 0;
    opacity: .25;
  }
`;