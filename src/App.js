function App() {
  return (
    <div>
      <a
        href={`https://api.whatsapp.com/send?text=Hola, visita mi pagina%0a${window.location.href}`}
        data-action="share/whatsapp/share"
        target="_blank"
      >
        Share
      </a>
    </div>
  );
}

export default App;
