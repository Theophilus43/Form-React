import logo from './logo.svg';
import './App.css'
import ParentComp from './component/ParentComp'
import Forms from './component/Forms'
import RefsDemo from './component/RefsDemo';
import FocusInput from './component/FocusInput'
import FRParentInput from './component/FRParentInput'
import PortalDemo from './component/PortalDemo'
import Hero from './component/Hero'
import ErrorBoundary from './component/ErrorBoundary';
import ClickCounter from './component/ClickCounter';
import HoverCounter from './component/HoverCounter';
import ClickCounterTwo from './component/ClickCounterTwo';
import HoverCounterTwo from './component/HoverCounterTwo';
import User from './component/User';
import Counter from './component/Counter';
import ComponentC from './component/ComponentC';
import { UserProvider } from './component/UserContext';



function App() {
  return (
    <div className="App">
      <UserProvider value="Theophilus">
        <ComponentC />
      </UserProvider>

      {/* <Counter>
          {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
      </Counter>
        
       <Counter>
          {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </Counter> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? 'Theophilus' : 'Guest'} /> */}
      {/* <HoverCounter />
      <ClickCounter name ='Theophilus' /> */}

      {/* <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary> 
      <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>  
        <Hero heroName="joker"></Hero>
      </ErrorBoundary> */}
      
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Forms /> */}
    </div>
  );
}

export default App;
