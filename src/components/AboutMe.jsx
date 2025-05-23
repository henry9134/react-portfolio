import cartoon from '../assets/cartoon.png';
import './AboutMe.css';

export default function AboutMe({ language }) {
  return (
    <div className="about-container">
      <div className="avatar-wrapper">
        <img src={cartoon} alt="cartoon" className="avatar" />
      </div>

      <div className="speech-bubble">
        <div className="about-heading">
          <h3>{language === 'en' ? 'about me' : '自己紹介'}</h3>
          <span className="subtitle">
            • {language === 'en' ? 'Full-Stack Developer' : 'フルスタック開発者'}
          </span>
        </div>
        <p>
          {language === 'en' ? (
            <>
              Hi, I’m Henry — a junior full-stack developer based in Tokyo. I studied at university here and
              previously worked as an English teacher. To better engage my students, I began creating small games,
              which sparked my interest in programming. After self-studying, I joined Le Wagon’s coding bootcamp to
              deepen my skills. Now, I build full-stack applications using Ruby on Rails, React Native, and Heroku.
            </>
          ) : (
            <>
              こんにちは、東京在住のフルスタック開発者ヘンリーです。大学で学び、以前は英語教師として働いていました。
              学生との関わりを深めるために小さなゲームを作り始めたことがきっかけで、プログラミングに興味を持ちました。
              独学の後、Le Wagonのコーディングブートキャンプに参加し、スキルをさらに磨きました。
              現在は、Ruby on Rails・React Native・Heroku を使ったフルスタックアプリを開発しています。
            </>
          )}
        </p>
      </div>
    </div>
  );
}
