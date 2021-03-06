/**
 * Component - SystemBar Component
 *
 * @file SystemBar.js
 * @author mudio(job.mudio@gmail.com)
 */

import electron from 'electron';
import React, {Component, PropTypes} from 'react';

import styles from './SystemBar.css';

const browserWindow = electron.remote.getCurrentWindow();

export default class SystemBar extends Component {
    static propTypes = {
        resize: PropTypes.bool
    }

    close() {
        browserWindow.close();
    }

    toggleMaximize() {
        if (browserWindow.isMaximized()) {
            browserWindow.unmaximize();
        } else {
            browserWindow.maximize();
        }
    }

    minimize() {
        browserWindow.minimize();
    }

    render() {
        if (process.platform === 'darwin') {
            return null;
        }

        const resize = this.props.resize;

        return (
            <div className={styles.container}>
                {resize && <div className={`fa fa-minus ${styles.min}`} onClick={this.minimize} />}
                {resize && <div className={`fa fa-expand ${styles.max}`} onClick={this.toggleMaximize} />}
                <div className={`fa fa-times ${styles.exit}`} onClick={this.close} />
            </div>
        );
    }
}
