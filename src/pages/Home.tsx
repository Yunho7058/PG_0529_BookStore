import Button from '../components/common/Button';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import InputText from '../components/common/InputText';
import Title from '../components/common/Title';

const Home = () => {
  return (
    <>
      <Title size="small" color="background">
        제목
      </Title>
      <Button size="large" scheme="primary">
        버튼
      </Button>
      <InputText placeholder="여기에 입력!" />
      <div>홈이야</div>
    </>
  );
};
export default Home;
