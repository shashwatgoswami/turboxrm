namespace Xrm.Sdk{
    
    /**
     * Option set class
     */
    class OptionSetValue{
        /**
         * Intializes the option set class
         * @argument value
         */        
        constructor(value? : number) {
            
        }

        private _value : number;
        
        /**
         *  Gets the value of option set value
         */
        get value() : number {
            return this._value;
        }

        /**
         *  Sets the value of option set
         */
        set value(newValue : number){
            this._value = newValue;
        }
    }
}