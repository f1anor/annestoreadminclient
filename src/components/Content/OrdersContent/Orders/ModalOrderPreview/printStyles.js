export const styles = `
.printWrapper {
	visibility: hidden;
}

.h5 {
	font-size: 16px;
	font-family: "Montserrat-medium", sans-serif;
}

.tablePrint {
	margin-bottom: 20px;
	border: 1px solid #000;
	width: 100%;
	font-family: "Montserrat-medium", sans-serif;
	border-collapse: collapse;
}

.tablePrint thead tr th {
	border: 1px solid #000;
	font-family: "Montserrat-medium", sans-serif;
	font-weight: 600;
	background-color: #f6f6f7;
}

.tablePrint tbody td {
	padding: 10px;
	border: 1px solid #000;
}

.center {
	text-align: center;
}

.padding {
	padding-left: 20px !important;
}

.tablePrint tbody td.borderless {
	border: none;
}

.tableTitle {
	font-family: "Montserrat-medium", sans-serif;
	font-weight: 600;
	background-color: #f6f6f7;
}

.date {
	margin-top: 10px;
	margin-bottom: 10px;
	font-family: "Montserrat-medium", sans-serif;
}

@media print {
	/* здесь будут стили для печати */
	.printWrapper {
		visibility: visible;
	}
}
`;
