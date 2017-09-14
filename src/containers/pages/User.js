import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { observer, inject  } from 'mobx-react';
import {BootstrapTable, TableHeaderColumn, InsertModalHeader, InsertModalFooter} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

@inject('userStore','uiStore','orderStore') @observer
export default class User extends React.Component{
  statusFormatter(cell, row, enumObject, rowIndex) {
		// let { onClickEdit, onClickDelete } = this.props;
		return	<div>
              {cell.name}
            </div>
  }
	render() {
		// const { loggedIn } = this.props.uiStore;
		const { items } = this.props.orderStore;
		return (
			<div>
        <BootstrapTable
          data={items}
          //options={ { noDataText: 'There are no data' } }
          striped
          hover
          pagination	                	
          search
          multiColumnSearch
        >
          <TableHeaderColumn isKey dataField='id'hidden searchable={ false }>ID</TableHeaderColumn>    	
          <TableHeaderColumn dataField='order_status' width='85px' searchable={ false } dataSort dataFormat={this.statusFormatter.bind(this)}>Status</TableHeaderColumn>
          <TableHeaderColumn dataField='payment' width='90px' searchable={ true } dataSort>Payment</TableHeaderColumn>
          <TableHeaderColumn dataField='expedition' width='120px' searchable={ true } dataSort>Expedition</TableHeaderColumn>
          <TableHeaderColumn dataField='total' width='190px' searchable={ true } dataSort>Total</TableHeaderColumn>	
          <TableHeaderColumn dataField='created_at' width='120px' searchable={ true } dataSort>Time</TableHeaderColumn>					  
        </BootstrapTable>
			</div>
		)
	}

}