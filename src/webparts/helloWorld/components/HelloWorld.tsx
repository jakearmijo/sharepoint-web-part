import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div className={ styles.helloWorld }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <h1>IS THIS THING ON??</h1>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
              <div id="main-div">
                <div className="icon-link"> 
                  <img src='/assests/mole.png' width='75' height='75'/>
                  <div className="icon-link-information">
                    <p className={ styles.subTitle }>Title: Training Exercise #1</p>
                    <p className={ styles.description }>description of that said training</p>
                    <a href='this-is-the-link-to-training-video' target='_blank' className={ styles.button }>LINK TO SEND TO</a>
                  </div>
                </div>
                <div className="icon-link"> 
                  <img src='/assests/mole.png' width='75' height='75'/>
                  <div className="icon-link-information">
                    <p className={ styles.subTitle }>Title: Training Exercise #2</p>
                    <p className={ styles.description }>description of that said training</p>
                    <a href='this-is-the-link-to-training-video' target='_blank' className={ styles.button }>LINK TO SEND TO</a>
                  </div>
                </div>
                <div className="icon-link"> 
                  <img src='/assests/mole.png' width='75' height='75'/>
                  <div className="icon-link-information">
                    <p className={ styles.subTitle }>Title: Training Exercise #3</p>
                    <p className={ styles.description }>description of that said training</p>
                    <a href='this-is-the-link-to-training-video' target='_blank' className={ styles.button }>LINK TO SEND TO</a>
                  </div>
                </div>
                <div className="icon-link"> 
                  <img src='/assests/mole.png' width='75' height='75'/>
                  <div className="icon-link-information">
                    <p className={ styles.subTitle }>Title: Training Exercise #4</p>
                    <p className={ styles.description }>description of that said training</p>
                    <a href='this-is-the-link-to-training-video' target='_blank' className={ styles.button }>LINK TO SEND TO</a>
                  </div>
                </div>
                <div className="icon-link"> 
                  <img src='/assests/mole.png' width='75' height='75'/>
                  <div className="icon-link-information">
                    <p className={ styles.subTitle }>Title: Training Exercise #5</p>
                    <p className={ styles.description }>description of that said training</p>
                    <a href='this-is-the-link-to-training-video' target='_blank' className={ styles.button }>LINK TO SEND TO</a>
                  </div>
                </div>
                <div className="icon-link"> 
                  <img src='/assests/mole.png' width='75' height='75'/>
                  <div className="icon-link-information">
                    <p className={ styles.subTitle }>Title: Training Exercise #6</p>
                    <p className={ styles.description }>description of that said training</p>
                    <a href='this-is-the-link-to-training-video' target='_blank' className={ styles.button }>LINK TO SEND TO</a>
                  </div>
                </div>
              </div>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
