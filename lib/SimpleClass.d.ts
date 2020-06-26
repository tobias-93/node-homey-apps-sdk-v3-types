export = SimpleClass;
/**
 * This is a simple class, extended by many other classes.
 */
declare class SimpleClass extends events.EventEmitter {
    /**
     * Log a message to the console (stdout)
     * @param {...*} args
     */
    log(...args: any[]): void;
    /**
     * Log a message to the console (stderr)
     * @param {...*} args
     */
    error(...args: any[]): void;
}
import events = require("events");
