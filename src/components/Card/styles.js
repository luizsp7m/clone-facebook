import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 24px;
  width: 100%;
  max-width: 530px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, .11);
  border-radius: 10px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 12px 16px;
  margin: 0;

  > div {
    display: flex;
    align-items: center;

    > div.profile {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background: url('https://images.wallpaperscraft.com/image/silhouette_city_street_123496_1280x720.jpg');
      background-size: cover;
      background-position: center;
      margin-right: 16px;
    }

    > h5 {
      cursor: pointer;
      color: #222;
      font-weight: 600;
      font-size: 16px;
    }
  }
`;

export const Legend = styled.div`
  /* border-bottom: 1px solid rgba(0, 0, 0, .1); */
  padding: 0 16px 16px 16px;

  > p {
    font-size: 17px;
    line-height: 24px;
    color: #333;
  }
`;

export const Image = styled.div`
  > div {
    cursor: pointer;
    background: url(${ props => props.src });
    background-position: center;
    background-size: cover;
    height: 450px;
    width: 100%;
  }
`;

export const Information = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);

  > div {
    display: flex;
    align-items: center;

    > span {
      margin-left: 10px;
      color: rgba(0, 0, 0, .75);
      font-size: 16px;
    }
  }
`
export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 64px;

  > div {
    display: flex;
    align-items: center;

    > span {
      margin-left: 12px;
      color: #666;
      font-weight: 600;
      font-size: 16px;
    }
  }
`
