import styled from 'styled-components';

export const Container = styled.div`
  
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  > h5 {
    color: #65676B;
    font-size: 16px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const List = styled.div`
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;

  > div {
    height: 38px;
    width: 38px;
    background: url(${ props => props.src });
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    margin-right: 12px;
    position: relative;

    :after {
      content: '';
      height: 8px;
      width: 8px;
      background: #05c46b;
      position: absolute;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      border: 2px solid #FFF;
    }
  }

  > span {
    font-weight: 600;
    color: #222;
    font-size: 15px;
  }
`