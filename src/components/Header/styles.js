import styled from 'styled-components';

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--header-color);
  height: 56px;
  padding: 0px 16px;

  box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
`

export const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 30%;
`

export const Center = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 40%;

  > div {
    cursor: pointer;
    position: relative;

    > span {
      background: var(--notification-color);
      border-radius: 50%;
      height: 22px;
      width: 22px;
      position: absolute;
      right: -15px;
      top: -5px;
      color: #FFF;
      font-weight: 600;
      font-size: 14px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 30%;

  > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;

    > span {
      margin-left: 8px;
      font-weight: 600;
      color: #333;
    }
  }

  > div + div {
    background: #D8DADF;
    margin-left: 20px;
    height: 40px;
    width: 40px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    &:hover {
      cursor: pointer;
      background: #ccc;
    }

    > span {
      background: var(--notification-color);
      border-radius: 50%;
      height: 22px;
      width: 22px;
      position: absolute;
      right: -12px;
      top: 0px;
      color: #FFF;
      font-weight: 600;
      font-size: 14px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
