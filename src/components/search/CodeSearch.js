import React from 'react'

const CodeSearch = (props) => {

  return (
    <span className="logos">
      <span className='logoStyle'>
        <input type="checkbox" value='angular' onChange={props.onChangeCode} name="angular js" id="angular" style={{ display: 'none' }} />
        <label htmlFor="angular" className="devicon-angularjs-plain text-lg" style={{ cursor: 'pointer', hover: 'JavaScript' }}>
          <p className="logoFontSize">Angular</p>
        </label>
        <input type="checkbox" value="c" onChange={props.onChangeCode} name="c" id="c" style={{ display: 'none' }} />
        <label htmlFor="c" className="devicon-c-plain  text-lg" style={{ cursor: 'pointer' }} >
          <p className="logoFontSize">C</p>
        </label>
        <input type="checkbox" value="c++" onChange={props.onChangeCode} name="c++" id="c++" style={{ display: 'none' }} />
        <label htmlFor="c++" className="devicon-cplusplus-plain text-lg" style={{ cursor: 'pointer' }}>
          <p className="logoFontSize">C++</p>
        </label>
        <input type="checkbox" value="c#" onChange={props.onChangeCode} name="csharp" id="csharp" style={{ display: 'none' }} />
        <label htmlFor="csharp" className="devicon-csharp-plain  text-lg" style={{ cursor: 'pointer' }}>
          <p className="logoFontSize">C#</p>
        </label>
        <input type="checkbox" value='django' onChange={props.onChangeCode} name="django" id="django" style={{ display: 'none' }} />
        <label htmlFor="django" className="devicon-django-plain text-lg" style={{ cursor: 'pointer' }} >
          <p className="logoFontSize">Django</p>
        </label>
        <input type="checkbox" value="go" onChange={props.onChangeCode} name="go" id="go" style={{ display: 'none' }} />
        <label htmlFor="go" className="devicon-go-plain  text-lg" style={{ cursor: 'pointer' }}>
          <p className="logoFontSize">Go</p>
        </label>
        <input type="checkbox" value="java" onChange={props.onChangeCode} name="java" id="java" style={{ display: 'none' }} />
        <label htmlFor="java" className="devicon-java-plain  text-lg" style={{ cursor: 'pointer' }} >
          <p className="logoFontSize">Java</p>
        </label>
        <input type="checkbox" value="javascript" onChange={props.onChangeCode} name="javascript" id="js" style={{ display: 'none' }} />
        <label htmlFor="js" className="devicon-javascript-plain  text-lg" style={{ cursor: 'pointer' }} >
          <p className="logoFontSize">JavaScript</p>
        </label>
        <input type="checkbox" value="kotlin" onChange={props.onChangeCode} name="kotlin" id="kotlin" style={{ display: 'none' }} />
        <label htmlFor="kotlin" className="devicon-kotlin-plain  text-lg" style={{ cursor: 'pointer' }} >
          <p className="logoFontSize">Kotlin</p>
        </label>
        <input type="checkbox" value='laravel' onChange={props.onChangeCode} name="laravel" id="laravel" style={{ display: 'none' }} />
        <label htmlFor="laravel" className="devicon-laravel-plain text-lg" style={{ cursor: 'pointer' }} >
          <p className="logoFontSize">Laravel</p>
        </label>
        <input type="checkbox" value='.net' onChange={props.onChangeCode} name="asp" id="dotnet" style={{ display: 'none' }} />
        <label htmlFor="dotnet" className="devicon-dot-net-plain text-lg" style={{ cursor: 'pointer' }} >
          <p className="logoFontSize">.NET</p>
        </label>
        <input type="checkbox" value='dotnetcore' onChange={props.onChangeCode} name="dotnetcore" id="dotnetcore" style={{ display: 'none' }} />
        <label htmlFor="dotnetcore" className="devicon-dotnetcore-plain text-lg" style={{ cursor: 'pointer' }} >
          <p className="logoFontSize">.NET Core</p>
        </label>
        <input type="checkbox" value='nodejs' onChange={props.onChangeCode} name="nodejs" id="nodejs" style={{ display: 'none' }} />
        <label htmlFor="nodejs" className="devicon-nodejs-plain text-lg" style={{ cursor: 'pointer' }} >
          <p className="logoFontSize">NodeJS</p>
        </label>
        <input type="checkbox" value="php" onChange={props.onChangeCode} name="php" id="php" style={{ display: 'none' }} />
        <label htmlFor="php" className="devicon-php-plain text-lg" style={{ cursor: 'pointer' }}>
          <p className="logoFontSize">PHP</p>
        </label>
        <input type="checkbox" value="python" onChange={props.onChangeCode} name="python" id="python" style={{ display: 'none' }} />
        <label htmlFor="python" className="devicon-python-plain text-lg" style={{ cursor: 'pointer' }}>
          <p className="logoFontSize">Python</p>
        </label>
        <input type="checkbox" value='rails' onChange={props.onChangeCode} name="ruby on rails" id="rails" style={{ display: 'none' }} />
        <label htmlFor="rails" className="devicon-rails-plain text-lg" style={{ cursor: 'pointer' }} >
          <p className="logoFontSize">Rails</p>
        </label>
        <input type="checkbox" value='react' onChange={props.onChangeCode} name='react js' id="react" style={{ display: 'none' }} />
        <label htmlFor="react" className="devicon-react-original text-lg" style={{ cursor: 'pointer' }} >
          <p className="logoFontSize">React</p>
        </label>
        <input type="checkbox" value="ruby" onChange={props.onChangeCode} name="ruby" id="ruby" style={{ display: 'none' }} />
        <label htmlFor="ruby" className="devicon-ruby-plain text-lg" style={{ cursor: 'pointer' }}>
          <p className="logoFontSize">Ruby</p>
        </label>
        <input type="checkbox" value="rust" onChange={props.onChangeCode} name="rust" id="rust" style={{ display: 'none' }} />
        <label htmlFor="rust" className="devicon-rust-plain text-lg" style={{ cursor: 'pointer' }}>
          <p className="logoFontSize">Rust</p>
        </label>
        <input type="checkbox" value='spring' onChange={props.onChangeCode} name="spring boot" id="spring" style={{ display: 'none' }} />
        <label htmlFor="spring" className="devicon-spring-plain text-lg" style={{ cursor: 'pointer' }}>
          <p className="logoFontSize">Spring</p>
        </label>
        <input type="checkbox" value='svelte' onChange={props.onChangeCode} name="svelte" id="svelte" style={{ display: 'none' }} />
        <label htmlFor="svelte" className="devicon-svelte-plain text-lg" style={{ cursor: 'pointer' }}>
          <p className="logoFontSize">Svelte</p>
        </label>
        <input type="checkbox" value="swift" onChange={props.onChangeCode} name="swift" id="swift" style={{ display: 'none' }} />
        <label htmlFor="swift" className="devicon-swift-plain text-lg" style={{ cursor: 'pointer' }}>
          <p className="logoFontSize">Swift</p>
        </label>
        <input type="checkbox" value="typescript" onChange={props.onChangeCode} name="typescript" id="typescript" style={{ display: 'none' }} />
        <label htmlFor="typescript" className="devicon-typescript-plain text-lg" style={{ cursor: 'pointer' }}>
          <p className="logoFontSize">TypeScript</p>
        </label>
        <input type="checkbox" value='vue' onChange={props.onChangeCode} name="vue" id="vue" style={{ display: 'none' }} />
        <label htmlFor="vue" className="devicon-vuejs-plain text-lg" style={{ cursor: 'pointer' }} >
          <p className="logoFontSize">Vue</p>
        </label>
      </span>
    </span>
  )
}

export default CodeSearch
