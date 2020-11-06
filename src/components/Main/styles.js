import styled from 'styled-components';

export const Container = styled.div`

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

  > img {
    height: 38px;
    width: 38px;
    border-radius: 38px;
    border: 3px solid #0B83ED;
    text-align: center;
  }

  > span {
    color: #FFF;
    font-weight: 600;
  }
`;
