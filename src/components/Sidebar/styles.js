import styled from 'styled-components';

export const Wrapper = styled.div`
  > hr {
    opacity: .5;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  > div {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    padding: 10px 12px;
    border-radius: 8px;
    cursor: pointer;

    .arrow-down {
      background: #D8DADF;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:hover {
      background: #E4E6E8;
    }

    > span {
      margin-left: 16px;
      font-weight: 600;
      color: #2d2d2d;
    }
  }

  > h3 {
    color: #65676B;
    margin-bottom: 8px;
    margin-left: 12px;
    font-weight: 500;
    font-size: 18px;
  }
`;
